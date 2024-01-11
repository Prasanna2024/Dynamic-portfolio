import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import classes from './about.module.css';
import { IoLogoLinkedin } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { useStore } from '../../store/store';

export default function About() {
  const {details} = useStore()
    const features = [
    {
      icon: IoLogoLinkedin,
      title: 'LinkedIn',
      link: details.linkedin,
      description: "Aspiring Full-Stack Web Developer | B.E. Electronics and Communication Engineering student with a passion for coding and innovation.",
    },
    {
      icon: SiLeetcode,
      title: 'LeetCode',
      link: details.leetcode,
      description: "LeetCode enthusiast with a track record of solving 370+ problems, actively honing problem-solving skills and algorithmic thinking for software development challenges.",
    },
    {
      icon: FaGithub,
      title: 'Github',
      link: details.github,
      description:
        "🔍 Web developer skilled in leveraging :focus-visible selector for enhanced accessibility. Solved 370+ LeetCode problems. Check out my GitHub for 10+ projects showcasing diverse coding expertise. 🚀",
    },
    {
      icon: FaInstagram,
      title: 'Instagram',
      link: details.instagram,
      description:
        "Exploring creativity through drawings and sharing glimpses of my life. Join me on Instagram for a visual journey filled with art, hobbies, and personal moments. 🎨✨ #ArtisticExpressions #LifeInPictures",
    },
  ];
  
  const items = features.map((feature) => (
    <div key={feature.title}>
      <a href={feature.link}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'white', to: 'white' }}
        className={classes[feature.title]}
      ><feature.icon style={{ width: rem(26), height: rem(26) }} />
      </ThemeIcon>
      </a>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));
  const handleDownload = () => {
    const fileUrl = './prasannag.pdf';
    const fileName = 'PrasannaG.pdf';

    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = fileName;

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
            About Me!
          </Title>
          <Text c="dimmed">
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'white', textAlign: 'justify' }}>
              Hey there! 👋 I'm currently immersed in the world of{' '}
              <strong style={{ color: '#0066cc' }}>Electronics and Communication Engineering</strong> at Kongu Engineering College,
              maintaining a stellar <strong style={{ color: '#0066cc' }}>CGPA of 8.93</strong> up to my 6th semester. 🚀

              My passion? It's all about{' '}
              <strong style={{ color: '#0066cc' }}>full-stack Web Development</strong>! 💻 I've had a blast working on various mini-projects
              that showcase my creativity and skills.

              Ready to dive deeper? Check out the nitty-gritty details in my{' '}
              <a href="your-resume-link.pdf" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 'bold' }}>
                resume
              </a>. 📄 Let's build something awesome together!
            </p>

          </Text>
          <a href="https://drive.google.com/file/d/1oml8KT2W-XAB8JNcKF4fQ4NqCgd07K23/view?usp=sharing" download="prasannaG.pdf">
            <Button
              variant="gradient"
              gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
              size="lg"
              radius="md"
              mt="xl"
              onClick={handleDownload}
            >
              Hire me!
            </Button>
          </a>

        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}