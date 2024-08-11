import Questioncard from "@/components/cards/Questioncard";
import HomeFilters from "@/components/home/HomeFilters";
import Fliter from "@/components/shared/Fliter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { getQuestions } from "@/lib/actions/question.action";
import Link from "next/link";
const questions = [
  {
    _id: "1",
    title: "Cascading Delets in SQLAlchemy?",
    tag: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "i=john-doe-jpg",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date(
      "Sat Aug 10 2024 17:35:04 GMT+0530 (India Standard Time)"
    ),
  },
  {
    _id: "2",
    title: "Cascading Delets in SQLAlchemy?",
    tag: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "i=john-doe-jpg",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date(
      "Sat Aug 10 2024 17:35:04 GMT+0530 (India Standard Time)"
    ),
  },
];
export default async function Home() {
  const result = await getQuestions({});
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Question</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPostion="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Fliter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <Questioncard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tag}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There' no question to show"
            description="Be the first to break the silence! Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
            link="/ask-question"
            LinkTitle="Ask the question"
          />
        )}
      </div>
    </>
  );
}
