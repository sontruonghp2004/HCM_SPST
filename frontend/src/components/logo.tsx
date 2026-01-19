// src/components/Logo.tsx (hoặc bất kỳ tên file nào bạn đang dùng)
import { cn } from "../lib/utils";

type LogoProps = {
  className?: string;
  uniColor?: boolean;
};

// Logo chính (dùng hình ảnh bạn gửi)
export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <span aria-hidden>
        <img
          src="/images/timeline/logo.jpg" // Đường dẫn tới ảnh bạn đã gửi
          alt="Logo Hồ Chí Minh với cờ Đảng"
          className="h-11 w-11 rounded-full object-cover shadow-md border-2 border-red-600"
          width={44}
          height={44}
        />
      </span>
      {/* Nếu muốn thêm text bên cạnh logo */}
      {/* <span className="text-xl font-bold text-red-700">Tư Tưởng Hồ Chí Minh</span> */}
    </div>
  );
};

// Logo nhỏ (icon version - dùng cùng ảnh nhưng nhỏ hơn)
export const LogoIcon = ({ className }: LogoProps) => (
  <img
    src="/images/timeline/logo.jpg"
    alt="Logo Hồ Chí Minh"
    className={cn("h-8 w-8 rounded-full object-cover shadow-sm border border-red-500", className)}
    width={32}
    height={32}
    aria-hidden
  />
);

export default Logo;