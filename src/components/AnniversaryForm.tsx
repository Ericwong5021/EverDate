import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { ANNIVERSARY_TYPE_OPTIONS, type AnniversaryType } from "../types/anniversary";

interface FormData {
  date: string;
  partnerName: string;
  type: AnniversaryType;
}

export default function AnniversaryForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      type: "dating",
    },
  });

  const onSubmit = (data: FormData) => {
    const id = uuidv4();
    const anniversary = {
      id,
      ...data,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem(`everdate-${id}`, JSON.stringify(anniversary));
    navigate(`/countdown/${id}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full max-w-md space-y-6">
      {/* 纪念日日期 */}
      <div className="space-y-2">
        <label
          htmlFor="date"
          className="block text-sm font-semibold tracking-wide"
          style={{ fontFamily: "var(--font-display)" }}
        >
          纪念日日期
        </label>
        <input
          id="date"
          type="date"
          {...register("date", {
            required: "请选择纪念日日期",
          })}
          className="w-full rounded-xl border border-rose-200 bg-white/80 px-4 py-3 text-base backdrop-blur-sm transition-all duration-300 placeholder:text-rose-300 hover:border-rose-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/40 focus:outline-none"
          style={{ fontFamily: "var(--font-body)" }}
        />
        {errors.date && <p className="mt-1 text-sm text-rose-600">{errors.date.message}</p>}
      </div>

      {/* 伴侣姓名 */}
      <div className="space-y-2">
        <label
          htmlFor="partnerName"
          className="block text-sm font-semibold tracking-wide"
          style={{ fontFamily: "var(--font-display)" }}
        >
          伴侣姓名
        </label>
        <input
          id="partnerName"
          type="text"
          placeholder="请输入伴侣的姓名"
          {...register("partnerName", {
            required: "请输入伴侣姓名",
            minLength: { value: 1, message: "姓名不能为空" },
            maxLength: { value: 20, message: "姓名不能超过20个字符" },
          })}
          className="w-full rounded-xl border border-rose-200 bg-white/80 px-4 py-3 text-base backdrop-blur-sm transition-all duration-300 placeholder:text-rose-300 hover:border-rose-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/40 focus:outline-none"
          style={{ fontFamily: "var(--font-body)" }}
        />
        {errors.partnerName && (
          <p className="mt-1 text-sm text-rose-600">{errors.partnerName.message}</p>
        )}
      </div>

      {/* 纪念日类型 */}
      <div className="space-y-2">
        <label
          htmlFor="type"
          className="block text-sm font-semibold tracking-wide"
          style={{ fontFamily: "var(--font-display)" }}
        >
          纪念日类型
        </label>
        <select
          id="type"
          {...register("type", { required: "请选择纪念日类型" })}
          className="w-full cursor-pointer appearance-none rounded-xl border border-rose-200 bg-white/80 px-4 py-3 text-base backdrop-blur-sm transition-all duration-300 hover:border-rose-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/40 focus:outline-none"
          style={{
            fontFamily: "var(--font-body)",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23be123c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
            backgroundSize: "20px",
          }}
        >
          {ANNIVERSARY_TYPE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.type && <p className="mt-1 text-sm text-rose-600">{errors.type.message}</p>}
      </div>

      {/* 提交按钮 */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-rose-600 hover:to-pink-600 hover:shadow-xl hover:shadow-rose-500/30 active:translate-y-0 active:from-rose-700 active:to-pink-700 disabled:cursor-not-allowed disabled:opacity-50"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {isSubmitting ? "创建中..." : "创建纪念日"}
      </button>
    </form>
  );
}
