import { 
	Button, 
	Container, 
	Flex, 
	HStack, 
	Text, 
	useColorMode 
  } from "@chakra-ui/react"; 
  import { Link } from "react-router-dom";
  
  import { PlusSquareIcon } from "@chakra-ui/icons";
  import { IoMoon } from "react-icons/io5";
  import { LuSun } from "react-icons/lu";
  
  const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
  
	return (
	  <Container maxW={"1140px"} px={4} py={2}>
		<Flex
		  h={16}
		  alignItems={"center"}
		  justifyContent={"space-between"}
		  flexDir={{
			base: "column",
			sm: "row",
		  }}
		>
		  {/* اسم العلامة التجارية */}
		  <Text
			fontSize={{ base: "22px", sm: "28px" }}
			fontWeight={"bold"}
			bgGradient={"linear(to-r, purple.500, pink.400)"}
			bgClip={"text"}
			textAlign={"center"}
		  >
			<Link to={"/"}>alaamediax 🛒</Link>
		  </Text>
  
		  {/* الروابط والأزرار */}
		  <HStack spacing={4} alignItems={"center"}>
			{/* زر إنشاء منتج جديد */}
			<Link to={"/create"}>
			  <Button
				bgGradient="linear(to-r, pink.500, purple.500)"
				_hover={{
				  bgGradient: "linear(to-r, purple.600, pink.600)",
				  transform: "scale(1.05)",
				}}
				color="white"
				size="md"
				leftIcon={<PlusSquareIcon />}
			  >
				Create
			  </Button>
			</Link>
  
			{/* زر تبديل الوضع */}
			<Button
			  onClick={toggleColorMode}
			  bg={colorMode === "light" ? "gray.200" : "gray.700"}
			  _hover={{
				bg: colorMode === "light" ? "gray.300" : "gray.600",
			  }}
			  color={colorMode === "light" ? "black" : "white"}
			  size="md"
			>
			  {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
			</Button>
		  </HStack>
		</Flex>
	  </Container>
	);
  };
  
  export default Navbar;
  