<template>
    <div>
      <h2
          class="my-4 text-4xl text-center text-gray-900"
        >
          Contact / Booking form
        </h2>
        <p
          class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl"
        >
          Got a technical issue? Want to send feedback? Need
          details about our Business plan? Let us know.
        </p>
        <form action="https://public.herotofu.com/v1/e9fd1230-a393-11ed-a31e-753411848f80" method="post" class="container w-1/2 mx-auto">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block text-lg mb-2" for="business">
              Business name
            </label>
            <input
              class="appearance-none block w-full p-3 mb-3 text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300 focus:shadow-outline focus:outline-none"
              id="business"
              type="text"
              name="business"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block text-lg mb-2" for="contact">
              Contact number
            </label>
            <input
              class="appearance-none block w-full p-3 text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300 focus:shadow-outline focus:outline-none"
              id="mobile"
              type="text"
              name="mobile"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block text-lg mb-2" for="country"> Country </label>
            <input
              class="appearance-none block w-full p-3 mb-3 text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300 focus:shadow-outline focus:outline-none"
              id="country"
              type="text"
              name="country"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block text-lg mb-2" for="state"> State </label>
            <input
              class="appearance-none block w-full p-3 text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300 focus:shadow-outline focus:outline-none"
              id="state"
              type="text"
              name="state"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block text-lg mb-2" for="email"> E-mail </label>
            <input
              class="appearance-none block w-full p-3 mb-3 text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300 focus:shadow-outline focus:outline-none"
              id="email"
              type="email"
              placeholder="********@*****.**"
              name="email"
            />
          </div>
        </div>
  
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/3 px-3">
            <label class="block text-lg mb-2" for="smplans">Social Media Plans</label>
            <select
              id="plans"
              name="smplans"
              class="block p-3 text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300"
            >
              <option value="smnone" selected>None</option>
              <option value="smpro">Pro Plan</option>
              <option value="smcustom">Customised Plan</option>
              <option value="smulti">Ultimate Plan</option>
            </select>
          </div>
  
          <div class="w-full md:w-1/3 px-3">
            <label class="block text-lg mb-2" for="webplans">Web Development Plans</label>
            <select
              id="plans"
              name="webplans"
              class="block p-3 text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300"
            >
              <option value="webnone" selected>None</option>
              <option value="webpro">Pro Plan</option>
              <option value="webcustom">Customised Plan</option>
              <option value="webulti">Ultimate Plan</option>
            </select>
          </div>
  
          <div class="w-full md:w-1/3 px-3">
            <label class="block text-lg mb-2" for="iosplans">iOS Development Plans</label>
            <select
              id="plans"
              name="iosplans"
              class="block p-3 text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300"
            >
              <option value="none" selected>None</option>
            </select>
          </div>
        </div>
  
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block text-lg mb-2" for="subject"> Subject </label>
            <input
              class="appearance-none block w-full p-3 mb-3 text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300 focus:shadow-outline focus:outline-none"
              id="subject"
              type="text"
              name="subject"
            />
          </div>
          <div class="w-full px-3">
            <label class="block text-lg mb-2" for="message"> Message </label>
            <textarea
              class="no-resize appearance-none block w-full p-3 mb-3 leading-tight h-48 resize-none text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300 focus:shadow-outline focus:outline-none"
              id="message"
              name="message"
              placeholder="Your message"
            ></textarea>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button
              class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              type="submit"
            >
              Send message
            </button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>
    </div>
  </template>
  