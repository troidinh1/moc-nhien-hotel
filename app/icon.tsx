import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 256,
  height: 256,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "56px",
          background: "#12332B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "132px",
          fontWeight: 900,
          fontFamily: "Arial, sans-serif",
        }}
      >
        M
      </div>
    ),
    {
      ...size,
    }
  );
}