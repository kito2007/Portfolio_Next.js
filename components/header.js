import Link from "next/link";
import Script from "next/script";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">박태영의 개발 포트폴리오</span>
                        </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/">
                            <a className="mr-5 hover:text-gray-900">홈</a>
                        </Link>
                        <Link href="/projects">
                            <a className="mr-5 hover:text-gray-900">프로젝트</a>
                        </Link>
                        <Link href="https://www.instagram.com/ty_park01/">
                            <a className="mr-5 hover:text-gray-900">연락하기</a>
                        </Link>
                    </nav>
                    {/*need creating dark mode toggle button*/}
                    <DarkModeToggleButton />
                </div>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-8JB2T1Q0TS"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'G-8JB2T1Q0TS');
                </script>
            </header>
        </>
    );
}