import {
  Box,
  Image,
  useBreakpointValue,
  useMediaQuery,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const NavBar = () => {
  const path = useLocation();
  const navigate = useNavigate()
  const Logo =
    "https://darussalamkasomalang.sch.id/images/identities/logo_wide.png";
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  const displayLogoOnly = useBreakpointValue({
    base: "block",
    md: "none",
  });

  const onBack = () => {
    navigate(-1)
  }

  return (
    <Box bg="orange" p={4} position="sticky" top={0} zIndex={1}>
      {isMobile ? (
        <Flex w="full" align="center">
          {path.pathname === "/" ? null : <Icon as={IoArrowBackOutline} w={5} h={5} mr='4' onClick={onBack} />}
          <Box>
            <Image src={Logo} width="150px" display={displayLogoOnly} />
          </Box>
        </Flex>
      ) : (
        "mobile only"
      )}
    </Box>
  );
};

export default NavBar;
