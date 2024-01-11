import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import classes from './Projects.module.css';
import filter from '../../assets/filter.png'
import shopify from '../../assets/ecommerce.jpg'
import todo from '../../assets/todo.jpg'
import expensesTracker from '../../assets/expenseTracker.jpg'
import managementapp from '../../assets/Management.jpg'
import orthoapp from '../../assets/orthoticAssistant.jpeg'
import { useStore } from '../../store/store';

export default function Project() {
    const { details, projectlink } = useStore()
    const mockdata = [
        {
            title: 'DynFilt',
            image: filter,
            date: 'August 18, 2022',
            link: projectlink.dynfilt
        },
        {
            title: 'Shopify',
            image: shopify,
            date: 'August 27, 2022',
            link: projectlink.shopify
        },
        {
            title: 'Todo List',
            image: todo,
            date: 'September 9, 2022',
            link: projectlink.todolist
        },
        {
            title: 'Expense Tracker',
            image: expensesTracker,
            date: 'September 12, 2022',
            link: projectlink.expenseTracker

        },
        {
            title: 'Records Management',
            image: managementapp,
            date: 'September 12, 2022',
            link: projectlink.recordmanager

        },
        {
            title: 'OrthoticAssistant',
            image: orthoapp,
            date: 'September 12, 2022',
            link: projectlink.orthotics

        },
    ];

    const cards = mockdata.map((article) => (

        <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
            <a href={article.link} style={{textDecoration:'none'}}>
                <AspectRatio ratio={1920 / 1080}>
                    <Image src={article.image} />
                </AspectRatio>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
                    {article.date}
                </Text>
                <Text className={classes.title} mt={5}>
                    {article.title}
                </Text>
            </a>
        </Card>

    ));


    return (
        <Container py="xl">
            <SimpleGrid cols={{ base: 1, sm: 3 }}>{cards}</SimpleGrid>
        </Container>
    );
}