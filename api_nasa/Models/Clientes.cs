using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace api_nasa.Models
{
    [Table("Clientes")]
    public class Clientes
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Nome { get; set; }
        [Required]
        [StringLength(100)]
        public string Email { get; set; }
        [Required]
        [StringLength(50)]
        public string Senha { get; set;}
        [Required]
        [StringLength(15)]
        public string Telefone { get; set; }

        [JsonIgnore]
        public List<Reservas>? Reserva { get; set; }
    }
}
