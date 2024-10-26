"use client";
import { useState } from "react";
import Modal from "./Modal";
// import { COLORS } from "@/data/Tags";
import { Download } from "lucide-react";
import { download } from "@/utils/download";
import { Badge } from "@/components/ui/badge";

const View = ({ title, src }) => {
  const [modal, setModal] = useState(null);

  return (
    <div className="flex w-full items-center justify-between">
      {modal && <Modal data={modal} setModal={setModal} />}
      <Badge onClick={() => setModal({ src, title })}>view</Badge>

      <Download
        className={`h-full hover:cursor-pointer hover:opacity-70`}
        onClick={() => download(src, `${title.replace(" ", "_")}.png`)}
      />
    </div>
  );
};

export default View;
