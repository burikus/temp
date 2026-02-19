namespace Infrastructure.Locking.EntityFramework.Npgsql
{
    public static class LocksRawQueries
    {
        public const string LockResourceSql = @"SELECT svc_lock.TryAquireResourceLockToken(@resourceId, @lockSpanSeconds) as ""Value""";

        public const string ReleaseResourceLockSql = @"SELECT svc_lock.ReleaseResourceLockToken(@resourceLockTokenId) as ""Value""";
    }
}
