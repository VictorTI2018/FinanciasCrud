using Microsoft.EntityFrameworkCore.Migrations;

namespace Financias.Infra.Data.Migrations
{
    public partial class AddDescricaoEmGastos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Descricao",
                table: "Gastos",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Descricao",
                table: "Gastos");
        }
    }
}
