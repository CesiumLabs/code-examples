import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SIndex() {
	const router = useRouter();

	useEffect(() => {
		router.push("/");
	}, [router]);

	return null;
}
