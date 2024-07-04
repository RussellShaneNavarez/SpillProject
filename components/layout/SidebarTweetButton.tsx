import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiSolidCoffeeBean } from "react-icons/bi";

const SidebarTweetButton = () => {
	const router = useRouter();
	const loginModal = useLoginModal();

	const onClick = useCallback(() => {
		loginModal.onOpen();
	}, [loginModal]);

	return (
		<div onClick={onClick}>
			<div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 items-center justify-center bg-violet-600 hover:bg-opacity-80 cursor-pointer transition">
				<BiSolidCoffeeBean size={24} color="white" />
			</div>
			<div className="hidden mt-6 lg:block px-4 py-2 rounded-full bg-violet-600 hover:opacity-90 cusror-pointer transition">
				<p className="hidden lg:block text-center font-semibold text-white text-[20px]">
					Spill
				</p>
			</div>
		</div>
	);
};

export default SidebarTweetButton;
