import { Card, Text, SimpleGrid, UnstyledButton, Anchor, Group, useMantineTheme, } from '@mantine/core';
import java from '../../assets/java.png';
import js from '../../assets/js.png';
import sql from '../../assets/sql.png'
import classes from './Skills.module.css';
import node from '../../assets/node.png'
import react from '../../assets/react.png'
import python from '../../assets/python.png'
import cp from '../../assets/cp.png'
import c from '../../assets/c.png'
import mdb from '../../assets/mdb.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import { Popover, Button } from '@mantine/core';
import ViewBar from '../ViewBar';

const mockdata = [
  { title: 'Java', icon: java, color: 'violet' },
  { title: 'JavaScript', icon: js, color: 'indigo' },
  { title: 'Mysql', icon: sql, color: 'blue' },
  { title: 'Nodejs', icon: node, color: 'green' },
  { title: 'React', icon: react, color: 'teal' },
  { title: 'Python', icon: python, color: 'cyan' },
  { title: 'C++', icon: cp, color: 'pink' },
  { title: 'C', icon: c, color: 'red' },
  { title: 'MangoDb', icon: mdb, color: 'orange' },
  { title: 'Html', icon: html, color: 'orange' },
  { title: 'Css', icon: css, color: 'orange' },
];

export default function Skills() {
  const theme = useMantineTheme();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <Popover>
        <Popover.Target>
          <Text size="xs" mt={7} style={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
            <img src={item.icon} height={70} width={70} />
            {item.title}
          </Text>
        </Popover.Target>
        <Popover.Dropdown>
          <ViewBar />
        </Popover.Dropdown>
      </Popover>
    </UnstyledButton>
  ));

  return (
    <div style={{ height: 'auto', width: '100%' }} >
      <Card withBorder radius="md" className={classes.card}>
        <Group justify="space-between">
          <Text className={classes.title}>Services</Text>
          <Anchor size="xs" c="dimmed" style={{ lineHeight: 1 }}>
          </Anchor>
        </Group>
        <SimpleGrid cols={3} mt="md">
          {items}
        </SimpleGrid>
      </Card>
    </div>
  );
}