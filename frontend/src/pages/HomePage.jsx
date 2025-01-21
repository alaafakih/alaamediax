import { 
	Container, 
	SimpleGrid, 
	Text, 
	VStack, 
	Button, 
	Box 
  } from "@chakra-ui/react"; 
  import { useEffect } from "react"; 
  import { Link } from "react-router-dom"; 
  import { useProductStore } from "../store/product"; 
  import ProductCard from "../components/ProductCard"; 
  
  const HomePage = () => {
	const { fetchProducts, products } = useProductStore();
  
	useEffect(() => {
	  fetchProducts();
	}, [fetchProducts]);
  
	console.log("products", products);
  
	return (
	  <Container maxW="container.xl" py={12}>
		<VStack spacing={8}>
		  {/* عنوان الصفحة */}
		  <Text
			fontSize={{ base: "2xl", md: "4xl" }}
			fontWeight="bold"
			bgGradient="linear(to-r, purple.500, pink.400)"
			bgClip="text"
			textAlign="center"
		  >
			Discover Unique Products ✨
		  </Text>
  
		  {/* قائمة المنتجات */}
		  {products.length > 0 ? (
			<SimpleGrid
			  columns={{ base: 1, md: 2, lg: 3 }}
			  spacing={10}
			  w="full"
			>
			  {products.map((product) => (
				<ProductCard key={product._id} product={product} />
			  ))}
			</SimpleGrid>
		  ) : (
			// رسالة عند عدم وجود منتجات
			<Box textAlign="center">
			  <Text
				fontSize="xl"
				fontWeight="bold"
				color="gray.600"
				mb={4}
			  >
				No products to display ❌
			  </Text>
			  <Link to="/create">
				<Button
				  color="white"
				  bgGradient="linear(to-r, pink.500, purple.500)"
				  _hover={{
					bgGradient: "linear(to-r, purple.600, pink.600)",
					transform: "scale(1.05)",
				  }}
				  size="lg"
				>
				  Add Your First Product
				</Button>
			  </Link>
			</Box>
		  )}
		</VStack>
	  </Container>
	);
  };
  
  export default HomePage;
  