import Image from "next/image"

export default function MyProfilePix() {
    return (
        <section className="w-full mx-auto">
            <Image src="/images/profile-photo.jpg" className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"

                width={200} height={200} alt="Rodrigo Amaral" priority={true} />
        </section>
    )
}
