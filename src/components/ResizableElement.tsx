import { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface Position {
  x: number;
  y: number;
  width: number;
  height: number;
}

type ResizeHandle =
  | "top-left"
  | "top"
  | "top-right"
  | "right"
  | "bottom-right"
  | "bottom"
  | "bottom-left"
  | "left";

export const ResizableElement = () => {
  const [position, setPosition] = useState<Position>({
    x: 100,
    y: 100,
    width: 280,
    height: 60,
  });
  
  const [isResizing, setIsResizing] = useState(false);
  const [activeHandle, setActiveHandle] = useState<ResizeHandle | null>(null);
  const startPosRef = useRef<{ x: number; y: number; pos: Position } | null>(null);

  const handleMouseDown = useCallback(
    (handle: ResizeHandle, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsResizing(true);
      setActiveHandle(handle);
      startPosRef.current = {
        x: e.clientX,
        y: e.clientY,
        pos: { ...position },
      };
    },
    [position]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isResizing || !startPosRef.current || !activeHandle) return;

      const deltaX = e.clientX - startPosRef.current.x;
      const deltaY = e.clientY - startPosRef.current.y;
      const startPos = startPosRef.current.pos;

      let newPos = { ...startPos };

      // Key fix: When resizing from left/top, we adjust position AND size
      // to keep the opposite edge fixed
      switch (activeHandle) {
        case "top-left":
          // Moving top-left handle: bottom-right stays fixed
          newPos.width = Math.max(50, startPos.width - deltaX);
          newPos.height = Math.max(30, startPos.height - deltaY);
          newPos.x = startPos.x + startPos.width - newPos.width;
          newPos.y = startPos.y + startPos.height - newPos.height;
          break;

        case "top":
          // Moving top handle: bottom edge stays fixed
          newPos.height = Math.max(30, startPos.height - deltaY);
          newPos.y = startPos.y + startPos.height - newPos.height;
          break;

        case "top-right":
          // Moving top-right handle: bottom-left stays fixed
          newPos.width = Math.max(50, startPos.width + deltaX);
          newPos.height = Math.max(30, startPos.height - deltaY);
          newPos.y = startPos.y + startPos.height - newPos.height;
          break;

        case "right":
          // Moving right handle: left edge stays fixed
          newPos.width = Math.max(50, startPos.width + deltaX);
          break;

        case "bottom-right":
          // Moving bottom-right handle: top-left stays fixed
          newPos.width = Math.max(50, startPos.width + deltaX);
          newPos.height = Math.max(30, startPos.height + deltaY);
          break;

        case "bottom":
          // Moving bottom handle: top edge stays fixed
          newPos.height = Math.max(30, startPos.height + deltaY);
          break;

        case "bottom-left":
          // Moving bottom-left handle: top-right stays fixed
          newPos.width = Math.max(50, startPos.width - deltaX);
          newPos.height = Math.max(30, startPos.height + deltaY);
          newPos.x = startPos.x + startPos.width - newPos.width;
          break;

        case "left":
          // Moving left handle: right edge stays fixed
          newPos.width = Math.max(50, startPos.width - deltaX);
          newPos.x = startPos.x + startPos.width - newPos.width;
          break;
      }

      setPosition(newPos);
    },
    [isResizing, activeHandle]
  );

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
    setActiveHandle(null);
    startPosRef.current = null;
  }, []);

  // Attach global mouse listeners
  useState(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  });

  return (
    <div
      className={cn(
        "absolute rounded-lg bg-element-bg border-2 border-element-border",
        "flex items-center justify-center text-primary-foreground font-medium",
        "transition-shadow",
        isResizing && "shadow-lg"
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${position.width}px`,
        height: `${position.height}px`,
      }}
    >
      <span className="select-none">button</span>

      {/* Corner Handles */}
      <ResizeHandle
        position="top-left"
        isActive={activeHandle === "top-left"}
        onMouseDown={(e) => handleMouseDown("top-left", e)}
        className="-top-1 -left-1 cursor-nwse-resize"
      />
      <ResizeHandle
        position="top-right"
        isActive={activeHandle === "top-right"}
        onMouseDown={(e) => handleMouseDown("top-right", e)}
        className="-top-1 -right-1 cursor-nesw-resize"
      />
      <ResizeHandle
        position="bottom-right"
        isActive={activeHandle === "bottom-right"}
        onMouseDown={(e) => handleMouseDown("bottom-right", e)}
        className="-bottom-1 -right-1 cursor-nwse-resize"
      />
      <ResizeHandle
        position="bottom-left"
        isActive={activeHandle === "bottom-left"}
        onMouseDown={(e) => handleMouseDown("bottom-left", e)}
        className="-bottom-1 -left-1 cursor-nesw-resize"
      />

      {/* Edge Handles */}
      <ResizeHandle
        position="top"
        isActive={activeHandle === "top"}
        onMouseDown={(e) => handleMouseDown("top", e)}
        className="-top-1 left-1/2 -translate-x-1/2 cursor-ns-resize"
      />
      <ResizeHandle
        position="right"
        isActive={activeHandle === "right"}
        onMouseDown={(e) => handleMouseDown("right", e)}
        className="top-1/2 -translate-y-1/2 -right-1 cursor-ew-resize"
      />
      <ResizeHandle
        position="bottom"
        isActive={activeHandle === "bottom"}
        onMouseDown={(e) => handleMouseDown("bottom", e)}
        className="-bottom-1 left-1/2 -translate-x-1/2 cursor-ns-resize"
      />
      <ResizeHandle
        position="left"
        isActive={activeHandle === "left"}
        onMouseDown={(e) => handleMouseDown("left", e)}
        className="top-1/2 -translate-y-1/2 -left-1 cursor-ew-resize"
      />
    </div>
  );
};

interface ResizeHandleProps {
  position: string;
  isActive: boolean;
  onMouseDown: (e: React.MouseEvent) => void;
  className?: string;
}

const ResizeHandle = ({
  isActive,
  onMouseDown,
  className,
}: ResizeHandleProps) => {
  return (
    <div
      className={cn(
        "absolute w-3 h-3 bg-canvas-bg border-2 border-handle rounded-sm",
        "transition-all duration-150",
        "hover:bg-handle hover:scale-125 hover:border-handle-hover",
        isActive && "bg-handle scale-125 border-handle-hover",
        className
      )}
      onMouseDown={onMouseDown}
    />
  );
};
