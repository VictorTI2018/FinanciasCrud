using Microsoft.EntityFrameworkCore.Migrations;

namespace Financias.Infra.Data.Migrations
{
    public partial class AddSituacaoContaEmGastos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SituacaoConta",
                table: "Gastos",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SituacaoConta",
                table: "Gastos");
        }
    }
}
