import { type Metric } from "./metric.types.ts";
import { useCacheService } from "./metric.cache-service.ts";
import { MetricResponse, useMetricRepository } from "./metric.repo.ts";

export const useMetricService = () => {
  const metricRepo = useMetricRepository();
  const metricCache = useCacheService(metricRepo);

  const checkCache = () => metricCache.checkCache();

  const handleMetric = (
    metric: Metric,
    ...params: any[]
  ): Promise<MetricResponse> => {
    return metricRepo.getAllByMetric(metric as Metric, ...params);
  };

  return {
    checkCache,
    handleMetric,
  };
};
