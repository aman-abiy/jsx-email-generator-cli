const { Body, Column, Html, Head, Section, Row, Link, Text, Preview } = require('jsx-email');

const Template = ({ name, offer }) => {
  return (
    <Html lang="en">
      <Head>
        <Preview>Welcome to Company, {name}!</Preview>
      </Head>
      <Body style={{ backgroundColor: "#040712", color: "#FFFFFF", fontFamily: "Arial, sans-serif", padding: "20px" }}>
        
        <Section style={{ backgroundColor: "#6D28D9", borderRadius: "8px", width: "600px", margin: "0 auto", padding: "20px" }}>
          <Row>
            <Column style={{ textAlign: "center", padding: "10px" }}>
              <h1 style={{ color: "#FFFFFF", fontSize: "24px", marginBottom: "10px" }}>Welcome to Company!</h1>
            </Column>
          </Row>
        </Section>
        
        <Section style={{ backgroundColor: "#2D2D3A", borderRadius: "8px", width: "600px", margin: "20px auto", padding: "20px" }}>
          <Row>
            <Column style={{ textAlign: "center", padding: "10px" }}>
              <h2 style={{ color: "#E0E0E0", fontSize: "20px", marginBottom: "10px" }}>Hello, {name}!</h2>
              <Text style={{ color: "#C7C7C7", fontSize: "16px", lineHeight: "1.6" }}>
                We're thrilled to have you on board! At <strong>Company</strong>, we’re committed to bringing you the best service for your screen sharing and collaboration needs.
              </Text>
              <Text style={{ color: "#C7C7C7", fontSize: "16px", lineHeight: "1.6" }}>
                To get you started, here’s an exclusive offer just for you:
              </Text>
              <h6 style={{ color: "#E0E0E0", fontSize: "18px", margin: "10px 0" }}>{offer}</h6>
            </Column>
          </Row>
          <Row style={{ textAlign: "center" }}>
            <Column>
              <Link
                href="https://example.com/start"
                style={{
                  display: "inline-block",
                  backgroundColor: "#6D28D9",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Get Started Now
              </Link>
            </Column>
          </Row>
        </Section>

        <Section style={{ textAlign: "center", marginTop: "20px" }}>
          <Text style={{ color: "#9E9E9E", fontSize: "12px" }}>
            © {new Date().getFullYear()} Company. All rights reserved.
          </Text>
        </Section>
      </Body>
    </Html>
  );
};

module.exports = { Template };
