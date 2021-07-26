import React from 'react'
import { Container, Flex, Box, Avatar, Image, Text, Spacer, Input, Button, Grid, GridItem, VStack, StackDivider } from '@chakra-ui/react'
import chicken from '../resources/chicken.jpg'
import { BsHeart } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'


function Home() {
    return (
        <Container maxW="container.lg" p={5}>
            <Flex mt={5}>
                <Box maxW='xl' w='100%' bg='white' borderWidth="1px" >
                    <Box p={3}>
                        <Flex>
                            <Avatar name='user' src='https://images.unsplash.com/photo-1563122870-6b0b48a0af09?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' />
                            <Text style={{fontSize:'16px', fontWeight:'bold'}} m={2}>John Doe</Text>
                        </Flex>
                    </Box>
                    <Image src={chicken} />
                    <Box p={3}>
                        <Box d='flex' alignItems='baseline' mt={1}>
                            <BsHeart style={{ fontSize:'30px'}}/>
                            <FaRegComment  style={{ fontSize:'30px', marginLeft: '15px'}}/>
                        </Box>
                        <Text mt={2}>204 Likes</Text>
                        <Box d='flex' alignItems='baseline'>
                            <Text style={{fontSize:'13px', fontWeight:'bold'}}>John Doe</Text>
                           
                            <Text style={{fontSize:'16px', fontWeight:'400'}} ml={1}>Pure breed layers, It took me three months to get where i am today...</Text>
                        </Box>

                        <Button variant='link' mt={2}>View all 23 comments</Button>

                        <Box d='flex' alignItems='baseline'>
                            <Text style={{fontSize:'13px', fontWeight:'bold'}}>Jane Doe</Text>
                           
                            <Text style={{fontSize:'16px', fontWeight:'400'}} ml={1}>Congratulations</Text>
                        </Box>

                        <Box d='flex' alignItems='baseline'>
                            <Text style={{fontSize:'13px', fontWeight:'bold'}}>Jane Doe</Text>
                           
                            <Text style={{fontSize:'16px', fontWeight:'400'}} ml={1}>Good Work</Text>
                        </Box>
                        </Box>
                        <Box  mt={2} style={{borderTop:'1px solid gray'}}>
                            <Box p={4} d='flex' alignItems='baseline'>
                            <Input variant='unstyled' placeholder='Add a comment...' />
                            <Spacer />
                            <Button variant='link'>Post</Button>
                            </Box>
                           
                        </Box>


                   



                </Box>

<Spacer/>
                <Box ml={5}>
                    <Box bg='white' p={3}>
                        <Box>
                            <Text>Messages</Text>
                        </Box>
                        <VStack
                            divider={<StackDivider borderColor="gray.200" />}
                            spacing={3}
                            align="stretch"
                        >
                            <Box>
                                <Grid
                                    h="50px"
                                    templateRows="repeat(2, 1fr)"
                                    templateColumns="repeat(5, 1fr)"
                                    gap={1}
                                >
                                    <GridItem rowSpan={1} colSpan={1}>
                                        <Avatar name='user' src='https://images.unsplash.com/photo-1563122870-6b0b48a0af09?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' />
                                    </GridItem>
                                    <GridItem colSpan={4}>
                                        <Flex>
                                            <Text>John Doe</Text>
                                            <Spacer />
                                            <Text>3:00pm</Text>
                                        </Flex>
                                        <Text>Hi, i will like to buy this...</Text>
                                    </GridItem>
                                </Grid>

                            </Box>

                            <Box>
                            <Grid
                                h="100px"
                                templateRows="repeat(2, 1fr)"
                                templateColumns="repeat(5, 1fr)"
                                gap={1}
                            >
                                <GridItem rowSpan={1} colSpan={1}>
                                    <Avatar name='user' src='https://images.unsplash.com/photo-1563122870-6b0b48a0af09?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' />
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <Flex>
                                        <Text>John Doe</Text>
                                        <Spacer/>
                                        <Text>3:00pm</Text>
                                    </Flex>
                                    <Text>Hi, i will like to buy this...</Text>
                                </GridItem>
                            </Grid>

                        </Box>

                        </VStack>
                       
                    </Box>


                </Box>
            </Flex>

        </Container>

    )
}

export default Home