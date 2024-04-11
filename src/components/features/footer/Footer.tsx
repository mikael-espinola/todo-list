import { Container, Link, Text } from "./style";
import { FaHeart } from "react-icons/fa6";

function Footer() {
  return (
    <Container>
      <Text>
        Developed and maintained with
        <Link>
          <FaHeart color="red" />
        </Link>
        by
        <Link
          href="https://mikael-espinola.github.io/myportfolio"
          target="_blank"
        >
          Mikael Espínola
        </Link>
      </Text>
    </Container>
  );
}

export default Footer;
