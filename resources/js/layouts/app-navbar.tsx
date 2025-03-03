import { ThemeSwitcher } from "@/components/theme-switcher"
import type { PagePropsData } from "@/types"
import { usePage } from "@inertiajs/react"
import {
  IconArrowUpRight,
  IconBrandJustd,
  IconBrandLaravel,
  IconChevronLgDown,
  IconColorPalette,
  IconColorSwatch,
  IconLogout,
  IconPackage,
  IconSettings,
} from "justd-icons"
import { useState, useEffect } from "react"
import type { Selection } from "react-aria-components"
import { Avatar, buttonStyles, Link, Menu, Navbar, Separator } from "ui"
import { useTheme } from "@/utils/use-theme"

const navigations = [
  {
    name: "Home",
    textValue: "Home",
    href: "/",
  },
  {
    name: "About",
    textValue: "About",
    href: "/about",
  },
]

export function AppNavbar({ children, ...props }: React.ComponentProps<typeof Navbar>) {
  const page = usePage()
  const { auth } = usePage<PagePropsData>().props
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => setIsOpen(false), [page.url])
  return (
    <Navbar isOpen={isOpen} onOpenChange={setIsOpen} {...props}>
      <Navbar.Nav>
        <Navbar.Logo aria-label="Logo">
          <IconBrandLaravel className="size-6" />
        </Navbar.Logo>
        <Navbar.Section>
          {navigations.map((item) => (
            <Navbar.Item isCurrent={item.href === page.url} key={item.href} href={item.href}>
              {item.name}
            </Navbar.Item>
          ))}
          <Menu>
            <Navbar.Item className="group">
              Resources...
              <IconChevronLgDown className="ml-2 size-4 transition-transform group-data-pressed:rotate-180" />
            </Navbar.Item>
            <Menu.Content className="sm:min-w-48">
              <Menu.Submenu>
                <Menu.Item>
                  <IconBrandJustdBlocks />
                  <Menu.Label>Blocks</Menu.Label>
                </Menu.Item>
                <Menu.Content>
                  <Menu.Item
                    target="_blank"
                    href="https://blocks.getjustd.com"
                    className="justify-between"
                  >
                    <IconBrandJustdBlocks />
                    <Menu.Label>Premium Blocks</Menu.Label>
                  </Menu.Item>
                  <Menu.Item
                    target="_blank"
                    href="https://getjustd.com/blocks"
                    className="justify-between"
                  >
                    <IconBrandJustd />
                    <Menu.Label>Basic Blocks</Menu.Label>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Submenu>
              <Menu.Item target="_blank" href="https://getjustd.com" className="justify-between">
                <IconPackage />
                <Menu.Label>Components</Menu.Label>
                <IconArrowUpRight />
              </Menu.Item>
              <Menu.Item
                target="_blank"
                href="https://getjustd.com/colors"
                className="justify-between"
              >
                <IconColorSwatch />
                <Menu.Label>Colors</Menu.Label>
                <IconArrowUpRight />
              </Menu.Item>
              <Menu.Item
                target="_blank"
                href="https://getjustd.com/themes"
                className="justify-between"
              >
                <IconColorPalette />
                <Menu.Label>Themes</Menu.Label>
                <IconArrowUpRight />
              </Menu.Item>
              <Menu.Item target="_blank" href="https://laravel.com" className="justify-between">
                <IconBrandLaravel />
                <Menu.Label>Laravel</Menu.Label>
                <IconArrowUpRight />
              </Menu.Item>
            </Menu.Content>
          </Menu>
        </Navbar.Section>

        <Navbar.Section className="ml-auto hidden gap-x-1 lg:flex">
          {!auth.user && <ThemeSwitcher />}
          {auth.user ? (
            <UserMenu />
          ) : (
            <>
              <Separator orientation="vertical" className="mr-2 h-6" />
              <Link
                className={buttonStyles({
                  appearance: "outline",
                  size: "small",
                })}
                href={route("login")}
              >
                Login
              </Link>
              <Navbar.Item href={route("register")}>Register</Navbar.Item>
            </>
          )}
        </Navbar.Section>
      </Navbar.Nav>

      <Navbar.Compact>
        <Navbar.Flex>
          <Navbar.Trigger />
          <Separator className="h-6" orientation="vertical" />
          <Navbar.Logo aria-label="Logo">
            <IconBrandLaravel />
          </Navbar.Logo>
        </Navbar.Flex>
        <Navbar.Flex className="gap-x-1">
          {!auth.user && <ThemeSwitcher />}
          {auth.user ? (
            <UserMenu />
          ) : (
            <>
              <Link
                className={buttonStyles({
                  appearance: "outline",
                  size: "small",
                  shape: "circle",
                })}
                href={route("login")}
              >
                Login
              </Link>
            </>
          )}
        </Navbar.Flex>
      </Navbar.Compact>

      {children}
    </Navbar>
  )
}

function UserMenu() {
  const { auth } = usePage<PagePropsData>().props
  const { theme, updateTheme } = useTheme()
  const currentTheme = theme || "system"
  const [selectedTheme, setSelectedTheme] = useState<Selection>(new Set([currentTheme]))
  return (
    <Menu>
      <Menu.Trigger
        className="group flex items-start justify-between rounded-lg p-1 text-left data-hovered:bg-secondary"
        aria-label="Open menu"
      >
        <Avatar src={auth.user.gravatar} shape="square" className="mr-2 size-9 *:size-9" />
        <div className="flex flex-col pr-2">
          <strong className="font-semibold text-sm">{auth.user.name}</strong>
          <span className="text-xs">{auth.user.email}</span>
        </div>
        <IconChevronLgDown className="transition-transform group-data-pressed:rotate-180" />
      </Menu.Trigger>
      <Menu.Content placement="bottom end" className="sm:min-w-60">
        <Menu.Section>
          <Menu.Header separator className="relative">
            <div>{auth.user.name}</div>
            <div className="truncate whitespace-nowrap pr-6 font-normal text-muted-fg text-sm">
              {auth.user.email}
            </div>
          </Menu.Header>
        </Menu.Section>
        <Menu.Item href={route("dashboard")}>
          <Menu.Label>Dashboard</Menu.Label>
        </Menu.Item>
        <Menu.Item href={route("profile.edit")} className="justify-between">
          <Menu.Label>Settings</Menu.Label>
          <IconSettings />
        </Menu.Item>
        <Menu.Submenu>
          <Menu.Item>
            <Menu.Label>Preferences</Menu.Label>
          </Menu.Item>
          <Menu.Content
            selectionMode="single"
            selectedKeys={selectedTheme}
            onSelectionChange={(keys) => {
              setSelectedTheme(keys)
              // @ts-ignore
              updateTheme(keys.has("system") ? "system" : keys.has("dark") ? "dark" : "light")
            }}
            items={[
              { name: "Light", value: "light" },
              { name: "Dark", value: "dark" },
              { name: "System", value: "system" },
            ]}
          >
            {(item) => (
              <Menu.Item id={item.value} textValue={item.name}>
                <Menu.Label>{item.name}</Menu.Label>
              </Menu.Item>
            )}
          </Menu.Content>
        </Menu.Submenu>

        <Menu.Separator />
        <Menu.Item routerOptions={{ method: "post" }} href={route("logout")}>
          <Menu.Label>Logout</Menu.Label>
          <IconLogout />
        </Menu.Item>
      </Menu.Content>
    </Menu>
  )
}

export function IconBrandJustdBlocks() {
  return (
    <svg
      className="size-4.5 sm:size-5"
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect width={20} height={20} x={2} y={2} fill="#0D6DFD" rx="3.75" />
      <g fill="#fff" filter="url(#a)" shapeRendering="crispEdges">
        <path d="M5.36 6.311c0-.525.426-.952.951-.952h1.904c.526 0 .952.427.952.952v1.904a.95.95 0 0 1-.952.952H6.311a.95.95 0 0 1-.952-.952z" />
        <path
          d="M10.105 6.311c0-.525.426-.952.952-.952h1.904c.525 0 .952.427.952.952v1.904a.95.95 0 0 1-.952.952h-1.904a.95.95 0 0 1-.952-.952z"
          fillOpacity=".5"
        />
        <path d="M14.85 6.311c0-.525.426-.952.952-.952h1.904c.526 0 .952.427.952.952v1.904a.95.95 0 0 1-.952.952h-1.904a.95.95 0 0 1-.952-.952z" />
        <path
          d="M14.85 11.057c0-.526.426-.952.952-.952h1.904c.526 0 .952.426.952.952v1.904a.95.95 0 0 1-.952.952h-1.904a.95.95 0 0 1-.952-.952z"
          fillOpacity=".5"
        />
      </g>
      <defs>
        <filter
          id="a"
          width="13.426"
          height="8.68"
          x="5.296"
          y="5.328"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy=".032" />
          <feGaussianBlur stdDeviation=".032" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_74_56" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_74_56" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}
