import { Button } from "../shadcn/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../shadcn/dialog";

interface AppDialogProps {
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description?: string;
  showCloseButton?: boolean;
  className?: string;
  children?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
}
export const AppDiaglog = ({
  dialogOpen,
  setDialogOpen,
  title,
  description,
  showCloseButton = true,
  className,
  children,
  confirmText,
  cancelText,
  onConfirm,
}: AppDialogProps) => {
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className={className} showCloseButton={showCloseButton} >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children && <div className="mt-2">{children}</div>}
        <DialogFooter>
          {cancelText && (
            <Button variant="ghost" onClick={() => setDialogOpen(false)}>
              {cancelText}
            </Button>
          )}
          {confirmText && (
            <Button variant="outline" onClick={() => {
              onConfirm && onConfirm();
              setDialogOpen(false);
            }}>
              {confirmText}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};