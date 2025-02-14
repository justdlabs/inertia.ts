import { Header } from "@/components/header"
import { Logo } from "@/components/logo"
import AppLayout from "@/layouts/app-layout"
import { IconBrandJustdBlocks } from "@/layouts/app-navbar"
import { Head } from "@inertiajs/react"
import {
  IconBrandJustd,
  IconBrandParanoid,
  IconBrandParsinta,
  IconWindowVisitFill,
} from "justd-icons"
import { Card, Container, Link } from "ui"

const items = [
  {
    name: "Justd",
    url: "https://getjustd.com",
    icon: IconBrandJustd,
    description:
      " Justd is a chill set of React components, built on top of React Aria Components, all about keeping the web accessible.",
  },
  {
    name: "Blocks",
    url: "https://blocks.getjustd.com",
    icon: IconBrandJustdBlocks,
    description:
      "Create stunning, professional-grade layouts that not only save time but also elevate the quality of your projects.",
  },
  {
    name: "Icons",
    url: "https://getjustd.com/icons",
    icon: IconBrandParanoid,
    description:
      "A library of beautifully crafted react icons, perfect for enhancing the visual appeal and user experience of your web applications.",
  },
  {
    name: "Templates",
    url: "https://blocks.getjustd.com/templates",
    icon: IconWindowVisitFill,
    description: "Explore the next.js templates from web apps to design systems, all here.",
  },
  {
    name: "Parsinta",
    url: "https://parsinta.com",
    icon: IconBrandParsinta,
    description:
      "Improve your skills with Parsinta by pushing your skills to the next level, through the series here such as Laravel, Vue, React, Tailwind CSS and Much more.",
  },
]

export default function Home() {
  return (
    <>
      <Head title="Welcome to Laravel" />
      <Header title="Inertia Typescript" />
      <Container>
        <div className="overflow-hidden rounded-lg border border-transparent lg:border-border">
          <div>
            <div className="sm:p-20">
              <Link
                href="https://getjustd.com"
                target="_blank"
                className="grid size-12 place-content-center rounded-full outline-1 outline-border"
              >
                <Logo className="block size-7" />
              </Link>
              <div className="mb-8 max-w-2xl">
                <div className="mt-6 text-xl sm:text-2xl">
                  Laravel application with Inertia and React Typescript!
                </div>
                <div className="mt-4 text-muted-fg sm:text-lg">
                  This is a Laravel application with Inertia and React Typescript. It is a work in
                  progress. If you have any questions or suggestions, please feel free to contact
                  me.
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {items.map((item) => (
                  <div className="relative" key={item.name}>
                    <Link className="absolute inset-0 size-full" target="_blank" href={item.url} />
                    <Card>
                      <div className="px-6 pt-6">
                        <div className="grid size-8 place-content-center rounded-full border *:size-5">
                          <item.icon />
                        </div>
                      </div>
                      <Card.Header>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Description>{item.description}</Card.Description>
                      </Card.Header>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

Home.layout = (page: any) => <AppLayout children={page} />
