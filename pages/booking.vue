<template>
  <div class="pt-8">
    <section class="bg-white dark:bg-gray-900 my-8">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900"
        >
          Booking form
        </h2>
        <p
          class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl"
        >
          Thank you for your interest, please provide below details to help you
          serve better.
        </p>
        <form action="#" class="space-y-8">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Your email</label
            >
            <input
              type="email"
              id="email"
              class="text-gray-900 text-sm rounded-lg bg-gray-100 border-gray-300 block w-full p-2.5"
              placeholder="name@email.com"
              required
            />
          </div>
          <div class="justify-end flex-1 items-center">
            <div class="inline-block">
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Business name</label
              >
              <input
                type="text"
                id="company"
                class="block p-3 w-full text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300"
                placeholder="Business name"
                required
              />
            </div>

            <div class="inline-block">
              <label
                for="contact"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Contact number</label
              >
              <input
                type="text"
                id="contact"
                class="block p-3 w-full text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300"
                placeholder="Contact number"
                required
              />
            </div>

            <div class="inline-block">
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Plan selected</label
              >
              <input
                type="dropdown"
                id="company"
                class="block p-3 w-full text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300"
                placeholder="Plan selected"
                required
              />
            </div>
          </div>

          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Address</label
            >
            <input
              type="text"
              id="address"
              class="block p-3 w-full text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300"
              placeholder="Your complete address"
              required
            />
          </div>

          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Your message</label
            >
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 rounded-lg bg-gray-100 border-gray-300"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center rounded-lg bg-gray-100 bg-primary-700"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  </div>
</template>
