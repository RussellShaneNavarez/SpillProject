import { useRouter } from "next/router";
import { SiCoffeescript } from "react-icons/si";

const SidebarLogo = () => {
	const router = useRouter();

	return (
		<div
			onClick={() => router.push("/")}
			className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-violet-900 hover:bg-opacity-10 cursor-pointer transition"
		>
			<SiCoffeescript size={28} color="white" />
		</div>
	);
};

export default SidebarLogo;
