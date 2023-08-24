import { useZxing } from "react-zxing";

const ScanQRCode = ({ result, setResult }) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  return <video ref={ref} className="w-full aspect-square" />;
};

export default ScanQRCode;
