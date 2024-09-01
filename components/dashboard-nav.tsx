'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import { Dispatch, SetStateAction } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useSidebar } from '@/hooks/useSidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip';

import { buttonVariants } from "@/components/ui/button"
import { LucideIcon } from 'lucide-react';

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export function DashboardNav({
  items,
  setOpen,
  isMobileNav = false
}: DashboardNavProps) {
  const path = usePathname();
  const { isMinimized } = useSidebar();

  if (!items?.length) {
    return null;
  }

  console.log('isActive', isMobileNav, isMinimized);

  return (
    <nav className="grid items-start gap-2">
      <TooltipProvider>
        {items.map((item, index) => {
          const Icon = Icons[item.icon || 'arrowRight'];
          return item.children ? (
            <Accordion type="single" collapsible>
              <AccordionItem value={item.title} className="border-b-0">
                <AccordionTrigger
                  className={cn(
                    buttonVariants({
                      // size: "sm",
                      variant: "ghost",
                    }),
                    "justify-between",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
      
                      item.disabled && 'cursor-not-allowed opacity-80'
                    )}
                  
                  >
                    <Icon className={` size-5 flex-none`} />

                    {isMobileNav || (!isMinimized && !isMobileNav) ? (
                      <span className="mr-2 truncate">{item.title}</span>
                    ) : (
                      ''
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  align="center"
                  side="right"
                  sideOffset={8}
                  className={!isMinimized ? 'hidden' : 'inline-block'}
                >
                  {item.title}
                </TooltipContent>
              </Tooltip>
                  
                </AccordionTrigger>
                <AccordionContent>
                  <div className="ml-7 flex flex-col space-y-1">
                    {item.children.map((child, index) => (
                       <NavItemSingle 
                       index={index} 
                       item={child} 
                       path={path}
                       setOpen={setOpen}
                       Icon={Icon as LucideIcon}
                       isMobileNav 
                       isMinimized
                       hideIcon
                       />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) :(
            item.href && (
              <NavItemSingle 
                  index={index} 
                  item={item} 
                  path={path}
                  setOpen={setOpen}
                  Icon={Icon as LucideIcon}
                  isMobileNav 
                  isMinimized
                  />
            )
          );
        })}
      </TooltipProvider>
    </nav>
  );
}


interface NavItemSingleProps {
  index: number, 
  item: NavItem, 
  path: string, 
  setOpen: Dispatch<SetStateAction<boolean>> | undefined, 
  Icon: LucideIcon, 
  isMobileNav: boolean 
  isMinimized: boolean
  hideIcon?: boolean
}


function NavItemSingle({index, item, path, setOpen, Icon, isMobileNav, hideIcon, isMinimized}: NavItemSingleProps) {
  return <Tooltip key={index}>
    <TooltipTrigger asChild>
      <Link
        href={item.disabled ? '/' : item.href as string}
        className={cn(
          'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
          path === item.href ? 'bg-accent' : 'transparent',
          item.disabled && 'cursor-not-allowed opacity-80'
        )}
        onClick={() => {
          if (setOpen) setOpen(false);
        } }
      >
       {!hideIcon && <Icon className={`ml-3 size-5 flex-none`} /> }

        {isMobileNav || (!isMinimized && !isMobileNav) ? (
          <span className="mr-2 truncate">{item.title}</span>
        ) : (
          ''
        )}
      </Link>
    </TooltipTrigger>
    <TooltipContent
      align="center"
      side="right"
      sideOffset={8}
      className={!isMinimized ? 'hidden' : 'inline-block'}
    >
      {item.title}
    </TooltipContent>
  </Tooltip>;
}

