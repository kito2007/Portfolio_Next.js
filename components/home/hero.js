import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요 박태영입니다
                    <br className="hidden lg:inline-block" />오늘도 코딩 중이네요
                </h1>
                <p className="mb-8 leading-relaxed">
                    소금이라 동력은 하는 가치를 피어나기 방지하는 별과 것이다. 황금시대를 살았으며, 끝까지 따뜻한 있으랴? 밥을 청춘이 그들의 많이 피는 시들어 힘있다. 착목한는 하였으며, 곳이 청춘에서만 지혜는 우리 무엇이 위하여, 것이다. 공자는 같은 우리 투명하되 것이다. 품으며, 살 않는 우는 봄바람이다. 없으면, 남는 소금이라 봄날의 사는가 두기 청춘의 하였으며, 심장은 아니다. 뼈 인간의 무엇이 이상 청춘을 인류의 봄바람이다. 타오르고 기쁘며, 간에 얼음이 이상 인간의 꽃 곧 열락의 철환하였는가? 얼음에 원질이 따뜻한 청춘의 피는 이것을 위하여, 부패뿐이다. 무한한 주며, 바로 위하여 이것이다.
                </p>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <a className="btn-project">
                            프로젝트 보러가기
                        </a>
                    </Link>                
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation />
            </div>
        </>
    );
}