import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import photo from "@/assets/photo/avatar.webp"

export function Avatars() {
    return (
        <div className="flex flex-row flex-wrap items-center gap-12">
            <Avatar className="h-24 w-24">
                <AvatarImage
                    src={photo}
                    alt="@maennenajere"
                    className="w-full h-full object-cover"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                />
                <AvatarFallback className="text-xl font-bold text-white bg-zinc-800 rounded-full">
                    JM
                </AvatarFallback>
            </Avatar>
        </div>
    )
}

export default Avatars