import { Head } from '@inertiajs/react';
import { Header } from 'components/header';
import { Logo } from 'components/logo';
import {
  IconBrandGithub,
  IconBrandJustd,
  IconBrandKarteil,
  IconBrandParanoid,
  IconBrandParsinta,
  IconCube
} from 'justd-icons';
import { AppLayout } from 'layouts';
import { Card, Container, Grid, Link } from 'ui';

const items = [
  {
    name: 'Justd',
    url: 'https://getjustd.com',
    icon: IconBrandJustd,
    description:
      ' Justd is a chill set of React components, built on top of React Aria Components, all about keeping the web accessible.'
  },
  {
    name: 'Inertia.ts',
    url: 'https://github.com/irsyadadl/inertia.ts',
    icon: IconBrandGithub,
    description:
      'This project is developed by IrsyadAdl, if you want to contribute to this project, please visit the Github Repository.'
  },
  {
    name: 'Icons',
    url: 'https://getjustd.com/icons',
    icon: IconBrandParanoid,
    description:
      'A library of beautifully crafted react icons, perfect for enhancing the visual appeal and user experience of your web applications.'
  },
  {
    name: 'Next.js Template',
    url: 'https://irsyad.co/s',
    icon: IconCube,
    description: 'Explore the next.js templates from web apps to design systems, all here.'
  },
  {
    name: 'Parsinta',
    url: 'https://parsinta.com',
    icon: IconBrandParsinta,
    description:
      'Improve your skills with Parsinta by pushing your skills to the next level, through the series here such as Laravel, Vue, React, Tailwind CSS and Much more.'
  },
  {
    name: 'Karteil',
    url: 'https://karteil.com',
    icon: IconBrandKarteil,
    description:
      'Improve your skills with Karteil by pushing your skills to the next level, through the online books here such as Laravel, Vue, React, Tailwind CSS and Much more.'
  }
];

export default function Home() {
  return (
    <>
      <Head title="Welcome to Laravel" />
      <Header title="Inertia Typescript" />
      <Container>
        <div className="overflow-hidden rounded-lg border lg:border-border border-transparent">
          <div>
            <div className="sm:p-20">
              <Link
                href="https://getjustd.com"
                target="_blank"
                className="grid place-content-center size-12 outline-1 outline-border rounded-full"
              >
                <Logo className="block size-7" />
              </Link>
              <div className="max-w-2xl mb-8">
                <div className="mt-6 text-xl sm:text-2xl">Laravel application with Inertia and React Typescript!</div>
                <div className="mt-4 text-muted-fg sm:text-lg">
                  This is a Laravel application with Inertia and React Typescript. It is a work in progress. If you have
                  any questions or suggestions, please feel free to contact me.
                </div>
              </div>

              <Grid
                columns={{
                  initial: 1,
                  sm: 2
                }}
                gap={4}
              >
                <Grid columns={2} gap={4}>
                  {items.map((item) => (
                    <Grid.Item className="relative" key={item.name}>
                      <Link className="absolute inset-0 size-full" target="_blank" href={item.url} />
                      <Card>
                        <div className="px-6 pt-6">
                          <div className="size-8 grid place-content-center rounded-full border">
                            <item.icon />
                          </div>
                        </div>
                        <Card.Header>
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Description>{item.description}</Card.Description>
                        </Card.Header>
                      </Card>
                    </Grid.Item>
                  ))}
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

Home.layout = (page: any) => <AppLayout children={page} />;
