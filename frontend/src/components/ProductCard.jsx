import {
	Box,
	Button,
	Heading,
	HStack,
	IconButton,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useColorModeValue,
	useDisclosure,
	useToast,
	VStack,
  } from "@chakra-ui/react";
  import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
  import { useProductStore } from "../store/product";
  import { useState } from "react";
  
  const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);
  
	const textColor = useColorModeValue("gray.600", "gray.200");
	const bg = useColorModeValue("white", "gray.800");
	const cardHoverBg = useColorModeValue("gray.50", "gray.700");
  
	const { deleteProduct, updateProduct } = useProductStore();
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();
  
	const handleDeleteProduct = async (pid) => {
	  const { success, message } = await deleteProduct(pid);
	  if (!success) {
		toast({
		  title: "Error",
		  description: message,
		  status: "error",
		  duration: 3000,
		  isClosable: true,
		});
	  } else {
		toast({
		  title: "Success",
		  description: message,
		  status: "success",
		  duration: 3000,
		  isClosable: true,
		});
	  }
	};
  
	const handleUpdateProduct = async (pid, updatedProduct) => {
	  const { success, message } = await updateProduct(pid, updatedProduct);
	  onClose();
	  if (!success) {
		toast({
		  title: "Error",
		  description: message,
		  status: "error",
		  duration: 3000,
		  isClosable: true,
		});
	  } else {
		toast({
		  title: "Success",
		  description: "Product updated successfully",
		  status: "success",
		  duration: 3000,
		  isClosable: true,
		});
	  }
	};
  
	return (
	  <Box
		shadow="lg"
		rounded="lg"
		overflow="hidden"
		transition="all 0.3s"
		_hover={{ bg: cardHoverBg, transform: "translateY(-5px)", shadow: "xl" }}
		bg={bg}
	  >
		{/* صورة المنتج */}
		<Image src={product.image} alt={product.name} h={48} w="full" objectFit="cover" />
  
		{/* محتوى البطاقة */}
		<Box p={4}>
		  <Heading
			as="h3"
			size="md"
			mb={2}
			bgGradient="linear(to-r, purple.500, pink.400)"
			bgClip="text"
		  >
			{product.name}
		  </Heading>
  
		  <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
			${product.price}
		  </Text>
  
		  <HStack spacing={2}>
			{/* زر تعديل */}
			<IconButton
			  icon={<EditIcon />}
			  onClick={onOpen}
			  bgGradient="linear(to-r, blue.500, cyan.400)"
			  _hover={{ bgGradient: "linear(to-r, cyan.600, blue.600)" }}
			  color="white"
			/>
			{/* زر حذف */}
			<IconButton
			  icon={<DeleteIcon />}
			  onClick={() => handleDeleteProduct(product._id)}
			  bgGradient="linear(to-r, red.500, pink.400)"
			  _hover={{ bgGradient: "linear(to-r, pink.600, red.600)" }}
			  color="white"
			/>
		  </HStack>
		</Box>
  
		{/* مودال التعديل */}
		<Modal isOpen={isOpen} onClose={onClose}>
		  <ModalOverlay />
		  <ModalContent>
			<ModalHeader>Update Product</ModalHeader>
			<ModalCloseButton />
			<ModalBody>
			  <VStack spacing={4}>
				<Input
				  placeholder="Product Name"
				  name="name"
				  value={updatedProduct.name}
				  onChange={(e) =>
					setUpdatedProduct({ ...updatedProduct, name: e.target.value })
				  }
				/>
				<Input
				  placeholder="Price"
				  name="price"
				  type="number"
				  value={updatedProduct.price}
				  onChange={(e) =>
					setUpdatedProduct({ ...updatedProduct, price: e.target.value })
				  }
				/>
				<Input
				  placeholder="Image URL"
				  name="image"
				  value={updatedProduct.image}
				  onChange={(e) =>
					setUpdatedProduct({ ...updatedProduct, image: e.target.value })
				  }
				/>
			  </VStack>
			</ModalBody>
  
			<ModalFooter>
			  <Button
				bgGradient="linear(to-r, purple.500, pink.400)"
				_hover={{ bgGradient: "linear(to-r, pink.500, purple.500)" }}
				color="white"
				mr={3}
				onClick={() => handleUpdateProduct(product._id, updatedProduct)}
			  >
				Update
			  </Button>
			  <Button variant="ghost" onClick={onClose}>
				Cancel
			  </Button>
			</ModalFooter>
		  </ModalContent>
		</Modal>
	  </Box>
	);
  };
  
  export default ProductCard;
  