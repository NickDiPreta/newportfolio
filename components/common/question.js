import react from 'react'

export default function Question() {
  return (

    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-6 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="question">
          Type something.
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="question" type="text" placeholder="Is anyone there?" />
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Send
        </button>
      </div>
    </form >
  )

}
