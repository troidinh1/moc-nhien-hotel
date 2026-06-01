import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Mộc Nhiên Hotel - Khách sạn tại Liên Chiểu, Đà Nẵng";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "#FFFCF5",
          color: "#12332B",
          padding: "60px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "1080px",
            height: "510px",
            display: "flex",
            flexDirection: "row",
            borderRadius: "42px",
            border: "2px solid #E7DDCC",
            background: "#FFFFFF",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "690px",
              height: "510px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "46px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "18px",
              }}
            >
              <div
                style={{
                  width: "82px",
                  height: "82px",
                  borderRadius: "24px",
                  background: "#12332B",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "46px",
                  fontWeight: 900,
                }}
              >
                M
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: "44px",
                    fontWeight: 900,
                    letterSpacing: "-1.5px",
                    color: "#12332B",
                  }}
                >
                  Mộc Nhiên Hotel
                </div>

                <div
                  style={{
                    display: "flex",
                    marginTop: "6px",
                    fontSize: "18px",
                    fontWeight: 700,
                    letterSpacing: "7px",
                    color: "#647067",
                    textTransform: "uppercase",
                  }}
                >
                  Đà Nẵng • Liên Chiểu
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "320px",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "999px",
                  padding: "14px 24px",
                  background: "#C99A4A",
                  color: "#12332B",
                  fontSize: "22px",
                  fontWeight: 900,
                }}
              >
                Đặt phòng nhanh
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "26px",
                  fontSize: "60px",
                  lineHeight: 1.02,
                  fontWeight: 900,
                  letterSpacing: "-2.5px",
                  color: "#12332B",
                }}
              >
                Nghỉ ngơi thoải mái, giá hợp lý tại Đà Nẵng
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "22px",
                  fontSize: "26px",
                  lineHeight: 1.4,
                  color: "#4D625B",
                }}
              >
                Xem phòng, chọn thời lượng lưu trú, xem giá tạm tính và gửi yêu
                cầu đặt phòng qua Zalo.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "18px",
              }}
            >
              <div
                style={{
                  width: "185px",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "22px",
                  background: "#FFFCF5",
                  padding: "18px 22px",
                  border: "1px solid #E7DDCC",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: "18px",
                    color: "#647067",
                  }}
                >
                  Thuê giờ
                </div>

                <div
                  style={{
                    display: "flex",
                    marginTop: "6px",
                    fontSize: "32px",
                    fontWeight: 900,
                    color: "#12332B",
                  }}
                >
                  Từ 120K
                </div>
              </div>

              <div
                style={{
                  width: "185px",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "22px",
                  background: "#FFFCF5",
                  padding: "18px 22px",
                  border: "1px solid #E7DDCC",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: "18px",
                    color: "#647067",
                  }}
                >
                  Ngày đêm
                </div>

                <div
                  style={{
                    display: "flex",
                    marginTop: "6px",
                    fontSize: "32px",
                    fontWeight: 900,
                    color: "#12332B",
                  }}
                >
                  Từ 300K
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "390px",
              height: "510px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#F3EBDD",
            }}
          >
            <div
              style={{
                width: "292px",
                height: "292px",
                borderRadius: "58px",
                background: "#12332B",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "166px",
                fontWeight: 900,
              }}
            >
              M
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}