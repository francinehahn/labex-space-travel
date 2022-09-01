export const goToHome=(navigate) => navigate("/")

export const goToTripsList=(navigate)=> navigate("/lista-de-viagens")

export const goToAdmin=(navigate)=> navigate("/admin")

export const goToCreateTrip=(navigate) => navigate("/criar-viagem")

export const goToLogin=(navigate) => navigate("/login")

export const goToTripsApplication=(navigate) => navigate("/agendar-viagem")

export const goToTripDetails=(navigate, name) => navigate(`/detalhes-da-viagem/${name}`)