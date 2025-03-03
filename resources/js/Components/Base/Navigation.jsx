import {
    CalendarIcon, ChartPieIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, UserIcon,
} from '@heroicons/react/24/outline'
import {Bars3Icon, Cog6ToothIcon, XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {
    Dialog, DialogBackdrop, DialogPanel, Menu, MenuButton, MenuItem, MenuItems, TransitionChild
} from "@headlessui/react";
import {useState} from "react";
import {ChevronDownIcon} from "@heroicons/react/20/solid/index.js";
import {usePage} from "@inertiajs/react";



const navigation = [
    {name: 'Dashboard', href: '/home', icon: HomeIcon},
    {name: 'Appointments', href: '/appointments', icon: CalendarIcon},
    {name: 'Projects', href: '#', icon: FolderIcon},
    {name: 'Calendar', href: '#', icon: CalendarIcon},
    {name: 'Documents', href: '#', icon: DocumentDuplicateIcon},
    {name: 'Reports', href: '#', icon: ChartPieIcon},
];

const userNavigation = [
    {name: 'Your profile', href: '/profile'},
    {name: 'Sign out', href: '/logout'},
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navigation = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const {url} = usePage();
    const { auth } = usePage().props;

    return (
        <>
            {/* tablet or below*/}
            <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                <DialogBackdrop transition
                                className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"/>
                <div className="fixed inset-0 flex">
                    <DialogPanel transition
                                 className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full">
                        <TransitionChild>
                            <div
                                className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                                <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                                    <span className="sr-only">Close sidebar</span>
                                    <XMarkIcon aria-hidden="true" className="size-6 text-white"/>
                                </button>
                            </div>
                        </TransitionChild>

                        {/*Sidebar content*/}
                        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                            <div className="flex h-16 shrink-0 items-center">
                                <img alt="Your Company" src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
                                     className="h-8 w-auto"/>
                            </div>
                            <nav className="flex flex-1 flex-col">
                                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                    <li>
                                        <ul role="list" className="-mx-2 space-y-1">
                                            {navigation.map((item) => (<li key={item.name}>
                                                <a href={item.href}
                                                   className={classNames((item.url === url) ? 'bg-indigo-700 text-white' : 'text-indigo-200 hover:bg-indigo-700 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',)}
                                                >
                                                    <item.icon aria-hidden="true"
                                                               className={classNames((item.url === url) ? 'text-white' : 'text-indigo-200 group-hover:text-white', 'size-6 shrink-0',)}
                                                    />
                                                    {item.name}
                                                </a>
                                            </li>))}
                                        </ul>
                                    </li>
                                    <li className="mt-auto">
                                        <a href="#"
                                           className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white">
                                            <Cog6ToothIcon aria-hidden="true"
                                                           className="size-6 shrink-0 text-indigo-200 group-hover:text-white"/>
                                            Settings
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            {/*Desktop sidebar*/}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                        <img alt="Your Company"
                             src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
                             className="h-8 w-auto"/>
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href}
                                               className={classNames((item.url === url) ? 'bg-indigo-700 text-white' : 'text-indigo-200 hover:bg-indigo-700 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',)}>
                                                <item.icon aria-hidden="true"
                                                           className={classNames((item.url === url) ? 'text-white' : 'text-indigo-200 group-hover:text-white', 'size-6 shrink-0',)}/>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            <li className="mt-auto">
                                <a href="#"
                                   className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white">
                                    <Cog6ToothIcon aria-hidden="true"
                                                   className="size-6 shrink-0 text-indigo-200 group-hover:text-white"/>
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="lg:pl-72">
                <div
                    className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                    <button type="button"
                            onClick={() => setSidebarOpen(true)}
                            className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="size-6"/>
                    </button>

                    {/* Separator */}
                    <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden"/>

                    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-end">
                        <div className="flex items-center gap-x-4 lg:gap-x-6">
                            <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"/>
                            <Menu as="div" className="relative">
                                <MenuButton className="-m-1.5 flex items-center p-1.5">
                                    <span className="sr-only">Open user menu</span>
                                    <UserIcon/>
                                    <span className="hidden lg:flex lg:items-center">
                                        <span aria-hidden="true" className="ml-4 text-sm/6 font-semibold text-gray-900">
                                            {auth?.user?.first_name} {auth?.user?.last_name}
                                        </span>
                                        <ChevronDownIcon aria-hidden="true" className="ml-2 size-5 text-gray-400"/>
                                    </span>
                                </MenuButton>

                                <MenuItems transition
                                           className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                                    {userNavigation.map((item) => (
                                        <MenuItem key={item.name}>
                                            <a href={item.href}
                                               className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none">
                                                {item.name}
                                            </a>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navigation;
