import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 동하입니다.
          <br className="hidden lg:inline-block" />
          ㅋㅌ
        </h1>
        <p className="mb-8 leading-relaxed">
          국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을
          도모함으로써 농·어민의 이익을 보호한다. 국회에서 의결된 법률안은
          정부에 이송되어 15일 이내에 대통령이 공포한다. 모든 국민은 언론·출판의
          자유와 집회·결사의 자유를 가진다. 이 헌법시행 당시에 이 헌법에 의하여
          새로 설치될 기관의 권한에 속하는 직무를 행하고 있는 기관은 이 헌법에
          의하여 새로운 기관이 설치될 때까지 존속하며 그 직무를 행한다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <div className="btn-project">프로젝트 보러가기</div>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
