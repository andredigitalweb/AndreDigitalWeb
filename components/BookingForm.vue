<template>
  <div class="px-8">
    <h2
      class="my-4 text-4xl text-center text-gray-900"
    >
      Booking form
    </h2>
    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
      Thank you for your interest, please provide below details to help you
      serve better.
    </p>
    <form name="booking" action="/success" method="POST" class="w-full max-w-lg mx-auto" data-netlify="true" data-netlify-honeypot="bot-field">
      <div class="flex flex-wrap -mx-3 mb-6">
        <p hidden>
          <label> Don’t fill this out: <input name="bot-field" /> </label>
        </p>
        <div class="w-full px-3">
          <label class="block text-xs mb-2" for="email"> E-mail </label>
          <input
            class="appearance-none block w-full p-3 mb-3 text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300 focus:shadow-outline focus:outline-none"
            id="email"
            type="email"
            placeholder="********@*****.**"
          />
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block text-xs mb-2" for="business">
            Business name
          </label>
          <input
            class="appearance-none block w-full p-3 mb-3 text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300 focus:shadow-outline focus:outline-none"
            id="business"
            type="text"
          />
        </div>
        <div class="w-full md:w-1/3 px-3">
          <label class="block text-xs mb-2" for="contact">
            Contact number
          </label>
          <input
            class="appearance-none block w-full p-3 text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300 focus:shadow-outline focus:outline-none"
            id="contact"
            type="text"
          />
        </div>
        <div class="w-full md:w-1/3 px-3">
          <label class="block text-xs mb-2" for="company">Plan selected</label>
          <select
            id="plans"
            name="plan"
            class="block p-3 text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300"
          >
            <option value="volvo" selected>Pro Plan</option>
            <option value="saab">Customised Plan</option>
            <option value="fiat">Ultimate Plan</option>
          </select>
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block text-xs mb-2" for="address">
            Your complete address
          </label>
          <input
            class="appearance-none block w-full p-3 mb-3 text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300 focus:shadow-outline focus:outline-none"
            id="address"
            type="text"
          />
        </div>
        <div class="w-full px-3">
          <label class="block text-xs mb-2" for="subject"> Subject </label>
          <input
            class="appearance-none block w-full p-3 mb-3 text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300 focus:shadow-outline focus:outline-none"
            id="subject"
            type="text"
          />
        </div>
        <div class="w-full px-3">
          <label class="block text-xs mb-2" for="message"> Message </label>
          <textarea
            class="no-resize appearance-none block w-full p-3 mb-3 leading-tight h-48 resize-none text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300 focus:shadow-outline focus:outline-none"
            id="message"
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
