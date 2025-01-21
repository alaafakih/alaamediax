import { 
	Box, 
	Button, 
	Container, 
	Heading, 
	Input, 
	useColorModeValue, 
	useToast, 
	VStack 
  } from "@chakra-ui/react"; 
  import { useState } from "react"; 
  import { useProductStore } from "../store/product"; 
  
  const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
	  name: "",
	  price: "",
	  image: "",
	});
	const toast = useToast();
  
	const { createProduct } = useProductStore();
  
	const handleAddProduct = async () => {
	  const { success, message } = await createProduct(newProduct);
	  if (!success) {
		toast({
		  title: "Error",
		  description: message,
		  status: "error",
		  isClosable: true,
		});
	  } else {
		toast({
		  title: "Success",
		  description: message,
		  status: "success",
		  isClosable: true,
		});
	  }
	  setNewProduct({ name: "", price: "", image: "" });
	};
  
	return (
	  <Container maxW={"container.sm"} py={12}>
		<VStack spacing={8}>
		  {/* عنوان الصفحة */}
		  <Heading
			as={"h1"}
			size={"2xl"}
			textAlign={"center"}
			bgGradient="linear(to-r, purple.500, pink.400)"
			bgClip="text"
			mb={8}
		  >
			Add Your Product
		  </Heading>
  
		  {/* صندوق الإدخال */}
		  <Box
			w={"full"}
			bg={useColorModeValue("white", "gray.800")}
			p={6}
			rounded={"lg"}
			shadow={"md"}
		  >
			<VStack spacing={4}>
			  <Input
				placeholder="Product Name"
				name="name"
				value={newProduct.name}
				onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
				focusBorderColor="pink.400"
			  />
			  <Input
				placeholder="Price"
				name="price"
				type="number"
				value={newProduct.price}
				onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
				focusBorderColor="purple.400"
			  />
			  <Input
				placeholder="Image URL"
				name="image"
				value={newProduct.image}
				onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
				focusBorderColor="pink.400"
			  />
  
			  <Button
				bgGradient="linear(to-r, pink.500, purple.500)"
				_hover={{
				  bgGradient: "linear(to-r, purple.600, pink.600)",
				  transform: "scale(1.05)",
				}}
				color="white"
				onClick={handleAddProduct}
				w="full"
			  >
				Add Product
			  </Button>
			</VStack>
		  </Box>
		</VStack>
	  </Container>
	);
  };
  
  export default CreatePage;
  