import { useState } from 'react';

type UserType = 'itmStudent' | 'itmEmployee' | 'external';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userNumber: '',
    gender: '',
    birthDate: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    setStep(2);
  };

  const validateEmail = (email: string, type: UserType | null) => {
    if (!type) return '';
    if (type === 'itmStudent' && !email.endsWith('@correo.itm.edu.co')) {
      return 'Los estudiantes deben usar correo @correo.itm.edu.co';
    }
    if (type === 'itmEmployee' && !email.endsWith('@itm.edu.co')) {
      return 'Los empleados deben usar correo @itm.edu.co';
    }
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name) newErrors.name = 'El nombre es requerido';
    if (!formData.email) newErrors.email = 'El correo es requerido';
    if (!formData.userNumber) newErrors.userNumber = 'El número de identificación es requerido';
    if (!formData.birthDate) newErrors.birthDate = 'La fecha de nacimiento es requerida';

    const emailError = validateEmail(formData.email, userType);
    if (emailError) newErrors.email = emailError;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          userType,
          role: 'user',
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', userNumber: '', gender: '', birthDate: '' });
      } else {
        const data = await response.json();
        setErrors({ submit: data.message || 'Error en el registro' });
      }
    } catch (error) {
      setErrors({ submit: 'Error de conexión' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#102D69] via-[#00A0B7] to-[#56ACDE] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#102D69] to-[#00A0B7] text-white p-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-12 h-12 text-[#102D69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">Registro de Usuario</h1>
          <p className="text-blue-100">Sistema de Evaluación Psicológica - ITM</p>
        </div>

        <div className="p-8">
          {success ? (
            <div className="text-center py-8">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#102D69] mb-2">¡Registro Exitoso!</h3>
              <p className="text-gray-600 mb-4">
                Se ha enviado una contraseña temporal a tu correo electrónico.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Revisa tu bandeja de entrada y activa tu cuenta.
              </p>
            </div>
          ) : step === 1 ? (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#102D69] mb-6 text-center">
                ¿Cuál es tu relación con el ITM?
              </h2>
              
              <button
                type="button"
                onClick={() => handleUserTypeSelect('itmStudent')}
                className="w-full group relative overflow-hidden bg-gradient-to-r from-[#102D69] to-[#00A0B7] text-white py-6 px-6 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold">Estudiante ITM</div>
                      <div className="text-sm text-blue-100">@correo.itm.edu.co</div>
                    </div>
                  </div>
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleUserTypeSelect('itmEmployee')}
                className="w-full group relative overflow-hidden bg-gradient-to-r from-[#00A0B7] to-[#56ACDE] text-white py-6 px-6 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold">Empleado ITM</div>
                      <div className="text-sm text-blue-100">@itm.edu.co</div>
                    </div>
                  </div>
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleUserTypeSelect('external')}
                className="w-full group relative overflow-hidden bg-gradient-to-r from-[#56ACDE] to-[#102D69] text-white py-6 px-6 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold">Usuario Externo</div>
                      <div className="text-sm text-blue-100">Cualquier dominio</div>
                    </div>
                  </div>
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <button
                type="button"
                onClick={() => { setStep(1); setUserType(null); }}
                className="flex items-center text-[#00A0B7] hover:text-[#102D69] font-medium mb-4 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Cambiar tipo de usuario
              </button>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A0B7] focus:border-[#00A0B7] transition-all"
                  placeholder="Ingresa tu nombre completo"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo electrónico *
                  {userType === 'itmStudent' && <span className="text-[#00A0B7]"> (@correo.itm.edu.co)</span>}
                  {userType === 'itmEmployee' && <span className="text-[#00A0B7]"> (@itm.edu.co)</span>}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A0B7] focus:border-[#00A0B7] transition-all"
                  placeholder="correo@ejemplo.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Número de identificación *
                  </label>
                  <input
                    type="text"
                    value={formData.userNumber}
                    onChange={(e) => setFormData({ ...formData, userNumber: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A0B7] focus:border-[#00A0B7] transition-all"
                    placeholder="123456789"
                  />
                  {errors.userNumber && <p className="text-red-500 text-sm mt-1">{errors.userNumber}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fecha de nacimiento *
                  </label>
                  <input
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A0B7] focus:border-[#00A0B7] transition-all"
                  />
                  {errors.birthDate && <p className="text-red-500 text-sm mt-1">{errors.birthDate}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Género
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00A0B7] focus:border-[#00A0B7] transition-all"
                >
                  <option value="">Seleccionar</option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                  <option value="O">Otro</option>
                </select>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-blue-800">
                    <strong>Nota:</strong> Se generará una contraseña temporal que será enviada a tu correo electrónico.
                  </p>
                </div>
              </div>

              {errors.submit && (
                <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-start space-x-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{errors.submit}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#102D69] to-[#00A0B7] text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Registrarse</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
