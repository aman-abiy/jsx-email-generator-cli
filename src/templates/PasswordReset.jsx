const { Body, Column, Html, Head, Section, Row, Link, Text } = require('jsx-email');

const Template = ({ name, resetLink, expiry }) => {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="../styles/tailwind.css" />
      </Head>
      <Body style={{ backgroundColor: "#040712", color: "#FFFFFF", fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <Section style={{ backgroundColor: "#6D28D9", borderRadius: "8px", width: "600px", margin: "0 auto", padding: "20px" }}>
          <Row>
            <Column style={{ textAlign: "center", padding: "10px" }}>
              <h1 style={{ color: "#FFFFFF", fontSize: "24px", marginBottom: "10px" }}>Reset Your Password</h1>
              <Text style={{ color: "#D1C4E9", fontSize: "16px" }}>
                Hi {name}, you requested to reset your password.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={{ backgroundColor: "#2D2D3A", borderRadius: "8px", width: "600px", margin: "20px auto", padding: "20px" }}>
          <Row>
            <Column style={{ textAlign: "center", padding: "10px" }}>
              <Text style={{ color: "#FFFFFF", fontSize: "16px", marginBottom: "10px" }}>
                Click the button below to reset your password. This link will expire in {expiry}.
              </Text>
              <Link
                href={resetLink}
                style={{
                  display: "inline-block",
                  backgroundColor: "#6D28D9",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  margin: "20px 0",
                }}
              >
                Reset Password
              </Link>
              <Text style={{ color: "#9E9E9E", fontSize: "14px", marginTop: "10px" }}>
                If you didn’t request this, you can safely ignore this email.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={{ textAlign: "center", marginTop: "20px" }}>
          <Text style={{ color: "#9E9E9E", fontSize: "12px" }}>
            © 2024 Company. All rights reserved.
          </Text>
        </Section>
      </Body>
    </Html>
  );
};

module.exports = { Template };
