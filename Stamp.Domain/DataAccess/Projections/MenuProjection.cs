namespace Stamp.Domain.DataAccess.Projections
{
    public record MenuProjection
    {
        public Guid Id { get; init; }
        public string Name { get; init; }
        public bool IsActive { get; init; }
        public int Position { get; init; }
        public SubMenuProjection[]? SubMenues { get; init; }
    }

    public record SubMenuProjection
    {
        public Guid Id { get; init; }
        public Guid MenuId { get; init; }
        public string Name { get; init; }
        public bool IsActive { get; init; }
        public int Position { get; init; }
    }

    public record SubMenuMenuProjection
    {
        public Guid SubMenuId { get; init; }
        public string SubMenuName { get; init; }
        public string MenuName { get; init; }
    }
}
