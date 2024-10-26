import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Popup = ({ popup, onClick, setPopup, text }) => {
  return (
    <div
      className="fixed inset-0 z-10 flex h-screen w-screen items-center justify-center bg-black/40"
      data-cy="popup"
    >
      <div className="flex flex-col items-center gap-3 rounded-lg bg-white p-3">
        <div className="flex w-full items-center justify-between">
          <p className="m-0 text-lg font-bold">{popup.title}</p>
          <X
            className="text-lg hover:cursor-pointer"
            onClick={() => setPopup({ ...popup, visible: false })}
          />
        </div>
        <p>{popup.text}</p>
        <div className="flex w-full justify-end gap-3">
          <Button onClick={() => setPopup({ ...popup, visible: false })}>
            cancel
          </Button>

          <Button
            onClick={() => {
              onClick();
              setPopup({ ...popup, visible: false });
            }}
          >
            {text}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
