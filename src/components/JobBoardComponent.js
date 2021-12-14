import React from "react";

const JobBoardComponent = ({
  job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
}) => {
  const tags = [role, level];

  if (languages) {
    tags.push(...languages);
  }

  if (tools) {
    tags.push(...tools);
  }

  return (
    <div
      class={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded 
        ${featured && "border-l-4 border-teal-500 border-solid"} sm:flex-row`}
    >
      <div>
        <img class="-mt-16 mb-4 w-20 h-20 sm:h-24 sm-w-24 sm:my-0" src={logo} alt={company} />
      </div>
      <div class="flex flex-col justify-between ml-4">
        <h3 class="font-bold text-teal-500">
          {company}
          {isNew && (
            <span
              class="bg-red-500 text-teal-100 font-bold m-2 py-1 px-2 
            rounded-full uppercase"
            >
              New
            </span>
          )}
          {featured && (
            <span
              class="bg-gray-800 text-white font-bold py-1 px-2 
            rounded-full uppercase"
            >
              Featured
            </span>
          )}
        </h3>
        <h2 class="font-bold text-xl my-2">{position}</h2>
        <p class="text-gray-700">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div
        class="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto
        sm:border-0 sm-pt-0 sm-mt-0"
      >
        {tags
          ? tags.map((tag) => (
              <span class="text-red-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded sm-mb-0">
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobBoardComponent;
