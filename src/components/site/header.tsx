"use client"

import { useEffect, useState, type ComponentProps } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRightIcon, MenuIcon } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/site/logo"
import { CTAButton } from "@/components/site/cta-button"
import { resolveCta } from "@/lib/ctas"
import { isNavLinkActive, navItems, type NavLink } from "@/lib/nav-items"

// Las anclas van en <a> nativo para que el navegador dispare `hashchange`
// (Products lo usa para abrir la pestaña). Las rutas usan next/link.
function NavAnchor({ href, ...props }: ComponentProps<"a"> & { href: string }) {
  return href.startsWith("#") ? <a href={href} {...props} /> : <Link href={href} {...props} />
}

const desktopLink = cn(
  buttonVariants({ variant: "ghost", size: "lg" }),
  "text-base font-normal data-active:text-primary xl:text-[1.05rem]"
)

function SubmenuLink({ link, active }: { link: NavLink; active: boolean }) {
  const Icon = link.icon
  return (
    <NavigationMenuLink
      closeOnClick
      active={active}
      render={<NavAnchor href={link.href} />}
      className="items-start gap-3 rounded-[8px] p-3 data-active:bg-secondary"
    >
      {Icon && (
        <span className="flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-secondary text-primary">
          <Icon className="size-4" aria-hidden />
        </span>
      )}
      <span className="flex flex-col gap-0.5">
        <span className="text-base text-foreground">{link.label}</span>
        {link.description && <span className="text-sm text-muted-foreground">{link.description}</span>}
      </span>
    </NavigationMenuLink>
  )
}

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActive = (href: string) => isNavLinkActive(href, pathname)
  const mobileCta = resolveCta("demo", "menu-movil")
  const MobileCtaIcon = mobileCta.action.icon

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled && "bg-background/80 shadow-hairline backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:gap-8 lg:px-8 xl:px-10">
        <Link href="/" aria-label="BSP Tech Solutions, inicio" className="shrink-0">
          <Logo />
        </Link>

        <NavigationMenu aria-label="Principal" className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {navItems.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuTrigger className={cn(desktopLink, "data-popup-open:bg-muted")}>
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-2">
                    <ul className="grid w-[min(44rem,calc(100vw-2rem))] grid-cols-2 gap-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <SubmenuLink link={child} active={isActive(child.href)} />
                        </li>
                      ))}
                    </ul>
                    <NavigationMenuLink
                      closeOnClick
                      active={isActive(item.href)}
                      render={<NavAnchor href={item.href} />}
                      className="mt-1 justify-between rounded-[8px] border-t px-3 py-3 text-base text-primary"
                    >
                      Ver todos los {item.label.toLowerCase()}
                      <ArrowRightIcon aria-hidden />
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    active={isActive(item.href)}
                    render={<NavAnchor href={item.href} />}
                    className={desktopLink}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-1">
          <CTAButton
            action="demo"
            location="navbar"
            size="lg"
            className="hidden h-11 px-5 text-base font-normal sm:inline-flex xl:h-12 xl:text-[1.05rem]"
          />
          <Sheet>
            <SheetTrigger
              render={<Button variant="ghost" size="icon-lg" className="lg:hidden" aria-label="Abrir menú" />}
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <Logo className="h-6" />
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Móvil" className="flex flex-1 flex-col px-4 pb-6">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <li
                      key={item.href}
                      className="animate-in fade-in-0 slide-in-from-right-4 fill-mode-both duration-300 motion-reduce:animate-none"
                      style={{ animationDelay: `${60 + index * 40}ms` }}
                    >
                      {item.children ? (
                        <Accordion>
                          <AccordionItem value={item.href}>
                            <AccordionTrigger className="items-center rounded-[8px] px-3 py-3 text-lg font-normal hover:bg-muted hover:no-underline aria-expanded:bg-muted">
                              {item.label}
                            </AccordionTrigger>
                            <AccordionContent className="pt-1 pb-2">
                              <ul className="flex flex-col gap-1 pl-3">
                                {item.children.map((child) => {
                                  const Icon = child.icon
                                  return (
                                    <li key={child.href}>
                                      <SheetClose
                                        render={<NavAnchor href={child.href} />}
                                        aria-current={isActive(child.href) ? "page" : undefined}
                                        className="flex items-center gap-3 rounded-[8px] px-3 py-2.5 text-base text-foreground no-underline! hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none aria-[current=page]:text-primary"
                                      >
                                        {Icon && (
                                          <span className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-secondary text-primary">
                                            <Icon className="size-4" aria-hidden />
                                          </span>
                                        )}
                                        {child.label}
                                      </SheetClose>
                                    </li>
                                  )
                                })}
                                <li>
                                  <SheetClose
                                    render={<NavAnchor href={item.href} />}
                                    className="flex items-center gap-2 rounded-[8px] px-3 py-2.5 text-base text-primary no-underline! hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                                  >
                                    Ver todos los {item.label.toLowerCase()}
                                    <ArrowRightIcon className="size-4" aria-hidden />
                                  </SheetClose>
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <SheetClose
                          render={<NavAnchor href={item.href} />}
                          aria-current={isActive(item.href) ? "page" : undefined}
                          className="flex rounded-[8px] px-3 py-3 text-lg hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none aria-[current=page]:text-primary"
                        >
                          {item.label}
                        </SheetClose>
                      )}
                    </li>
                  ))}
                </ul>
                <SheetClose
                  render={<a {...mobileCta.anchorProps} />}
                  className={cn(buttonVariants({ size: "xl" }), "mt-6")}
                >
                  {MobileCtaIcon && <MobileCtaIcon data-icon="inline-start" aria-hidden />}
                  {mobileCta.label}
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
