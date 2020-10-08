const valida = require('../src/validador_de_cpf');

test('13453423434 nao deve ser valido', () => {
	  expect(valida("13453423434")).toBe(false);
});

test('00000000000 nao deve ser valido', () => {
	  expect(valida("00000000000")).toBe(false);
});

test('52998224725 deve ser valido', () => {
	  expect(valida("52998224725")).toBe(true);
});