import { cn } from "./utils/cn-merge";

const OrderStatistics = ({ title, stats, variant, icon }) => {
  const Icon = icon;
  return (
    <div className="overflow-hidden rounded-lg border border-default-200 p-6">
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "inline-flex h-16 w-16 items-center justify-center rounded-full",
            variant
          )}
        >
          <Icon size={32} />
        </div>
        <div>
          <p className="mb-1 text-base font-medium text-default-500">{title}</p>
          <h4 className="mb-2 text-2xl font-semibold text-default-950">
            {stats}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default OrderStatistics;
