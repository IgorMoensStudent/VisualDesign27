import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import item1 from "../../public/item_1.png";
import item2 from "../../public/item_2.png";
import item3 from "../../public/item_3.png";
import item4 from "../../public/item_4.png";
import item5 from "../../public/item_5.png";
import item6 from "../../public/item_6.png";
import item7 from "../../public/item_7.jpg";
import item8 from "../../public/item_8.jpg";
import item9 from "../../public/item_9.jpg";
import item10 from "../../public/item_10.jpg";
import item11 from "../../public/item_11.jpg";
import item12 from "../../public/item_12.jpg";
import item13 from "../../public/item_13.jpg";
import item14 from "../../public/item_14.jpg";


import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'



const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]
  const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
  ]
  const filters = [ 
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: true },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: '2l', label: '2L', checked: false },
        { value: '6l', label: '6L', checked: false },
        { value: '12l', label: '12L', checked: false },
        { value: '18l', label: '18L', checked: false },
        { value: '20l', label: '20L', checked: false },
        { value: '40l', label: '40L', checked: true },
      ],
    },
  ]

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  

const Shop: React.FC = () => {
    return ( 
        <>
        <Head>
            <title>Shop</title>
        </Head>

        <div className="bg-white">
          <div>

             <div className="mx-auto max-w-full">
              <div className="h-[15rem] w-full bg-[#06132E] text-white flex flex-col items-center justify-center">
                  <div className="text-base text-center mb-3 bodyFont">Precision Cycling</div>
                  <div className="text-4xl font-bold mb-1 text-center headerFont">Shop</div>
              </div>
            </div>

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 headerFont">New Arrivals</h1>

                <div className="flex items-center">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        Sort
                        <ChevronDownIcon
                          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

                  <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                    <span className="sr-only">View grid</span>
                    <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                    onClick={() => {}}
                  >
                    <span className="sr-only">Filters</span>
                    <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <section aria-labelledby="products-heading" className="pb-24 pt-6">
                <h2 id="products-heading" className="sr-only">
                  Products
                </h2>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  {/* Filters */}
                  <form className="hidden lg:block">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href}>{category.name}</a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-4">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-600"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>

                  {/* Product grid */}
                  <div className="lg:col-span-3">
                    <div className="bg-white">
                      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2>

                        <div className="flex flex-wrap justify-center gap-2">
                        <div className="p-4 flex flex-col items-center">
                          <Image
                            src={item1}
                            alt="item1"
                            width={200}
                            height={200}
                          />
                          <p className="text-sm font-medium">Cycling Jersey</p>
                          <p className="text-sm font-medium">€35</p>
                        </div>
                        <div className="p-4 flex flex-col items-center">
                            <Image
                                src={item2}
                                alt="image3"
                                width={200}
                                height={200}
                                className="rounded-2xl"
                            />
                            <p className="text-sm font-medium">Cycling Jersey</p>
                            <p className="text-sm font-medium">€35</p>
                        </div>
                        <div className="p-4 flex flex-col items-center">
                            <Image
                                src={item3}
                                alt="image2"
                                width={200}
                                height={200}
                                className="rounded-2xl"
                            />
                            <p className="text-sm font-medium">Cycling Jersey</p>
                            <p className="text-sm font-medium">€35</p>
                        </div>
                        <div className="p-4 flex flex-col items-center">
                            <Image
                                src={item4}
                                alt="image2"
                                width={200}
                                height={200}
                                className="rounded-2xl"
                            />
                            <p className="text-sm font-medium">Cycling Jersey</p>
                            <p className="text-sm font-medium">€35</p>
                        </div>
                        <div className="p-4 flex flex-col items-center">
                            <Image
                                src={item5}
                                alt="image2"
                                width={200}
                                height={200}
                                className="rounded-2xl"
                            />
                            <p className="text-sm font-medium">Cycling Jersey</p>
                            <p className="text-sm font-medium">€35</p>
                        </div>
                        <div className="p-4 flex flex-col items-center">
                            <Image
                                src={item6}
                                alt="image2"
                                width={200}
                                height={200}
                                className="rounded-2xl"
                            />
                            <p className="text-sm font-medium">Cycling Jersey</p>
                            <p className="text-sm font-medium">€35</p>
                        </div> 

                        <div className="p-4 flex flex-col items-center">
                            <Image
                                src={item7}
                                alt="image2"
                                width={200}
                                height={200}
                                className="rounded-2xl"
                            />
                            <p className="text-sm font-medium">Water botlle 750ml</p>
                            <p className="text-sm font-medium">€15</p>
                        </div> 
                        <div className="p-4 flex flex-col items-center">
                            <Image
                                src={item8}
                                alt="image2"
                                width={200}
                                height={200}
                                className="rounded-2xl"
                            />
                            <p className="text-sm font-medium">Water botlle 750ml</p>
                            <p className="text-sm font-medium">€15</p>
                        </div> 

                        <div className="p-4 flex flex-col items-center">
                            <Image
                                src={item9}
                                alt="image2"
                                width={200}
                                height={200}
                                className="rounded-2xl"
                            />
                            <p className="text-sm font-medium">Water botlle 750ml</p>
                            <p className="text-sm font-medium">€15</p>
                        </div> 

                        <div className="p-4 flex flex-col items-center">
                            <Image
                                src={item12}
                                alt="image2"
                                width={200}
                                height={200}
                                className="rounded-2xl"
                            />
                            <p className="text-sm font-medium">Water botlle 750ml</p>
                            <p className="text-sm font-medium">€15</p>
                        </div> 

                        <div className="p-4 flex flex-col items-center">
                            <Image
                                src={item13}
                                alt="image2"
                                width={200}
                                height={200}
                                className="rounded-2xl"
                            />
                            <p className="text-sm font-medium">Water botlle 750ml</p>
                            <p className="text-sm font-medium">€15</p>
                        </div> 

                        <div className="p-4 flex flex-col items-center">
                            <Image
                                src={item14}
                                alt="image2"
                                width={200}
                                height={200}
                                className="rounded-2xl"
                            />
                            <p className="text-sm font-medium">Water botlle 750ml</p>
                            <p className="text-sm font-medium">€15</p>
                        </div> 
  
                    </div>

                      </div>
                    </div>
                    </div>

                </div>
              </section>
            </main>
          </div>
        </div>
        </>
    )
}

export default Shop;